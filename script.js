const targetWord = "happiness";
let currentWord = "joy";
let usedWords = [currentWord];

document.getElementById("submit-btn").addEventListener("click", handleStep);

function handleStep() {
  const input = document.getElementById("guess-input");
  const guess = input.value.trim().toLowerCase();
  input.value = "";

  if (!guess) return;

  if (usedWords.includes(guess)) {
    showFeedback("You've already used that word.");
    return;
  }

  const similarity = fakeSemanticSimilarity(currentWord, guess);
  if (similarity < 0.3) {
    showFeedback("That word feels too unrelated!");
    return;
  }

  // Update game state
  currentWord = guess;
  usedWords.push(guess);
  document.getElementById("current-word").textContent = currentWord;
  addToChain(guess);
  showFeedback(`Nice step! Similarity score: ${similarity.toFixed(2)}`);

  if (guess === targetWord) {
    showFeedback("🎉 You reached the target!");
  }
}

function addToChain(word) {
  const li = document.createElement("li");
  li.textContent = word;
  document.getElementById("chain-list").appendChild(li);
}

function showFeedback(message) {
  document.getElementById("feedback").textContent = message;
}

// Placeholder for semantic similarity
function fakeSemanticSimilarity(word1, word2) {
  const closeness = {
    "joy": { "delight": 0.8, "smile": 0.5, "happy": 0.7 },
    "happy": { "glad": 0.6, "happiness": 0.9 },
    "delight": { "happiness": 0.7 },
    "smile": { "happiness": 0.4 },
  };

  return closeness[word1]?.[word2] || 0.2;
}
