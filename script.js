// List of 20 words with their manually set relation scores (example scores)

const wordData = {
    fruit: 0.1,
    orchard: 0.3,
    tree: 0.2,
    wood: 0.6,
    pencil: 0.9,
    banana: 0.2,
    farm: 0.4,
    forest: 0.5,
    paper: 0.9,
    write: 0.9,
    book: 0.9,
    leaves: 0.3,
    garden: 0.2,
    bark: 0.7,
    carpenter: 0.9,
    sketch: 0.8,
    novel: 0.8,
    desk: 0.8,
    harvest: 0.6,
    lumber: 0.5,
};

const wordData2D = {
  apple: {
    apple: 0.1,
    fruit: 0.1,         // perfect path connection
    orchard: 0.9,       // less connected
    tree: 0.7,
    wood: 0.7,
    pencil: 0.9,
    banana: 0.3,
    farm: 0.7,
    forest: 0.9,
    paper: 0.9,
    write: 0.9,
    book: 0.9,
    leaves: 0.7,
    garden: 0.7,
    bark: 0.9,
    carpenter: 0.9,
    sketch: 0.9,
    novel: 0.9,
    desk: 0.9,
    harvest: 0.7,
    lumber: 0.7,
    author: 0.9
  },
  fruit: {
    apple: 0.1,         // perfect path backward connection (you can do symmetrical or not, I’ll make symmetrical)
    fruit: 0.1,
    orchard: 0.1,       // perfect path connection
    tree: 0.7,
    wood: 0.7,
    pencil: 0.9,
    banana: 0.3,
    farm: 0.7,
    forest: 0.9,
    paper: 0.9,
    write: 0.9,
    book: 0.9,
    leaves: 0.7,
    garden: 0.7,
    bark: 0.9,
    carpenter: 0.9,
    sketch: 0.9,
    novel: 0.9,
    desk: 0.9,
    harvest: 0.7,
    lumber: 0.7,
    author: 0.9
  },
  orchard: {
    apple: 0.9,
    fruit: 0.1,
    orchard: 0.1,
    tree: 0.1,
    wood: 0.7,
    pencil: 0.9,
    banana: 0.3,
    farm: 0.3,
    forest: 0.7,
    paper: 0.9,
    write: 0.9,
    book: 0.9,
    leaves: 0.7,
    garden: 0.3,
    bark: 0.9,
    carpenter: 0.9,
    sketch: 0.9,
    novel: 0.9,
    desk: 0.9,
    harvest: 0.3,
    lumber: 0.7,
    author: 0.9
  },
  tree: {
    apple: 0.7,
    fruit: 0.7,
    orchard: 0.1,
    tree: 0.1,
    wood: 0.1,
    pencil: 0.7,
    banana: 0.9,
    farm: 0.9,
    forest: 0.3,
    paper: 0.7,
    write: 0.9,
    book: 0.9,
    leaves: 0.3,
    garden: 0.7,
    bark: 0.3,
    carpenter: 0.7,
    sketch: 0.9,
    novel: 0.9,
    desk: 0.9,
    harvest: 0.7,
    lumber: 0.3,
    author: 0.9
  },
  wood: {
    apple: 0.7,
    fruit: 0.7,
    orchard: 0.7,
    tree: 0.1,       // perfect path
    wood: 0.1,
    pencil: 0.1,     // perfect path
    banana: 0.9,
    farm: 0.7,
    forest: 0.3,
    paper: 0.3,
    write: 0.9,
    book: 0.9,
    leaves: 0.7,
    garden: 0.7,
    bark: 0.3,
    carpenter: 0.3,
    sketch: 0.7,
    novel: 0.9,
    desk: 0.7,
    harvest: 0.7,
    lumber: 0.3,
    author: 0.9
  },
  pencil: {
    apple: 0.9,
    fruit: 0.9,
    orchard: 0.9,
    tree: 0.7,
    wood: 0.1,       // perfect path
    pencil: 0.1,
    banana: 0.9,
    farm: 0.9,
    forest: 0.9,
    paper: 0.3,
    write: 0.3,
    book: 0.7,
    leaves: 0.9,
    garden: 0.9,
    bark: 0.9,
    carpenter: 0.7,
    sketch: 0.3,
    novel: 0.7,
    desk: 0.7,
    harvest: 0.9,
    lumber: 0.7,
    author: 0.1   // perfect path
  },
  banana: {
    apple: 0.3,
    fruit: 0.3,
    orchard: 0.3,
    tree: 0.9,
    wood: 0.9,
    pencil: 0.9,
    banana: 0.1,
    farm: 0.7,
    forest: 0.9,
    paper: 0.9,
    write: 0.9,
    book: 0.9,
    leaves: 0.7,
    garden: 0.7,
    bark: 0.9,
    carpenter: 0.9,
    sketch: 0.9,
    novel: 0.9,
    desk: 0.9,
    harvest: 0.7,
    lumber: 0.9,
    author: 0.9
  },
  farm: {
    apple: 0.7,
    fruit: 0.7,
    orchard: 0.3,
    tree: 0.9,
    wood: 0.7,
    pencil: 0.9,
    banana: 0.7,
    farm: 0.1,
    forest: 0.7,
    paper: 0.9,
    write: 0.9,
    book: 0.9,
    leaves: 0.7,
    garden: 0.3,
    bark: 0.9,
    carpenter: 0.7,
    sketch: 0.9,
    novel: 0.9,
    desk: 0.9,
    harvest: 0.3,
    lumber: 0.7,
    author: 0.9
  },
  forest: {
    apple: 0.9,
    fruit: 0.9,
    orchard: 0.7,
    tree: 0.3,
    wood: 0.3,
    pencil: 0.9,
    banana: 0.9,
    farm: 0.7,
    forest: 0.1,
    paper: 0.7,
    write: 0.9,
    book: 0.9,
    leaves: 0.3,
    garden: 0.7,
    bark: 0.3,
    carpenter: 0.7,
    sketch: 0.9,
    novel: 0.9,
    desk: 0.9,
    harvest: 0.7,
    lumber: 0.3,
    author: 0.9
  },
  paper: {
    apple: 0.9,
    fruit: 0.9,
    orchard: 0.9,
    tree: 0.7,
    wood: 0.3,
    pencil: 0.3,
    banana: 0.9,
    farm: 0.9,
    forest: 0.7,
    paper: 0.1,
    write: 0.3,
    book: 0.7,
    leaves: 0.9,
    garden: 0.9,
    bark: 0.9,
    carpenter: 0.7,
    sketch: 0.7,
    novel: 0.9,
    desk: 0.7,
    harvest: 0.9,
    lumber: 0.7,
    author: 0.9
  },
  write: {
    apple: 0.9,
    fruit: 0.9,
    orchard: 0.9,
    tree: 0.9,
    wood: 0.9,
    pencil: 0.3,
    banana: 0.9,
    farm: 0.9,
    forest: 0.9,
    paper: 0.3,
    write: 0.1,
    book: 0.3,
    leaves: 0.9,
    garden: 0.9,
    bark: 0.9,
    carpenter: 0.9,
    sketch: 0.3,
    novel: 0.7,
    desk: 0.7,
    harvest: 0.9,
    lumber: 0.9,
    author: 0.3
  },
  book: {
    apple: 0.9,
    fruit: 0.9,
    orchard: 0.9,
    tree: 0.9,
    wood: 0.7,
    pencil: 0.7,
    banana: 0.9,
    farm: 0.9,
    forest: 0.9,
    paper: 0.7,
    write: 0.3,
    book: 0.1,
    leaves: 0.9,
    garden: 0.9,
    bark: 0.9,
    carpenter: 0.9,
    sketch: 0.7,
    novel: 0.3,
    desk: 0.7,
    harvest: 0.9,
    lumber: 0.9,
    author: 0.3
  },
  leaves: {
    apple: 0.7,
    fruit: 0.7,
    orchard: 0.7,
    tree: 0.3,
    wood: 0.7,
    pencil: 0.9,
    banana: 0.7,
    farm: 0.7,
    forest: 0.3,
    paper: 0.9,
    write: 0.9,
    book: 0.9,
    leaves: 0.1,
    garden: 0.7,
    bark: 0.3,
    carpenter: 0.9,
    sketch: 0.9,
    novel: 0.9,
    desk: 0.9,
    harvest: 0.7,
    lumber: 0.7,
    author: 0.9
  },
  garden: {
    apple: 0.7,
    fruit: 0.7,
    orchard: 0.3,
    tree: 0.7,
    wood: 0.7,
    pencil: 0.9,
    banana: 0.7,
    farm: 0.3,
    forest: 0.7,
    paper: 0.9,
    write: 0.9,
    book: 0.9,
    leaves: 0.7,
    garden: 0.1,
    bark: 0.9,
    carpenter: 0.9,
    sketch: 0.9,
    novel: 0.9,
    desk: 0.9,
    harvest: 0.3,
    lumber: 0.7,
    author: 0.9
  },
  bark: {
    apple: 0.9,
    fruit: 0.9,
    orchard: 0.9,
    tree: 0.3,
    wood: 0.3,
    pencil: 0.9,
    banana: 0.9,
    farm: 0.9,
    forest: 0.3,
    paper: 0.9,
    write: 0.9,
    book: 0.9,
    leaves: 0.3,
    garden: 0.9,
    bark: 0.1,
    carpenter: 0.7,
    sketch: 0.9,
    novel: 0.9,
    desk: 0.9,
    harvest: 0.9,
    lumber: 0.3,
    author: 0.9
  },
  carpenter: {
    apple: 0.9,
    fruit: 0.9,
    orchard: 0.9,
    tree: 0.7,
    wood: 0.3,
    pencil: 0.7,
    banana: 0.9,
    farm: 0.7,
    forest: 0.7,
    paper: 0.7,
    write: 0.9,
    book: 0.9,
    leaves: 0.9,
    garden: 0.9,
    bark: 0.7,
    carpenter: 0.1,
    sketch: 0.7,
    novel: 0.9,
    desk: 0.7,
    harvest: 0.9,
    lumber: 0.3,
    author: 0.9
  },
  sketch: {
    apple: 0.9,
    fruit: 0.9,
    orchard: 0.9,
    tree: 0.9,
    wood: 0.7,
    pencil: 0.3,
    banana: 0.9,
    farm: 0.9,
    forest: 0.9,
    paper: 0.7,
    write: 0.3,
    book: 0.7,
    leaves: 0.9,
    garden: 0.9,
    bark: 0.9,
    carpenter: 0.7,
    sketch: 0.1,
    novel: 0.7,
    desk: 0.7,
    harvest: 0.9,
    lumber: 0.7,
    author: 0.9
  },
  novel: {
    apple: 0.9,
    fruit: 0.9,
    orchard: 0.9,
    tree: 0.9,
    wood: 0.9,
    pencil: 0.7,
    banana: 0.9,
    farm: 0.9,
    forest: 0.9,
    paper: 0.9,
    write: 0.7,
    book: 0.3,
    leaves: 0.9,
    garden: 0.9,
    bark: 0.9,
    carpenter: 0.9,
    sketch: 0.7,
    novel: 0.1,
    desk: 0.7,
    harvest: 0.9,
    lumber: 0.9,
    author: 0.3
  },
  desk: {
    apple: 0.9,
    fruit: 0.9,
    orchard: 0.9,
    tree: 0.9,
    wood: 0.7,
    pencil: 0.7,
    banana: 0.9,
    farm: 0.9,
    forest: 0.9,
    paper: 0.7,
    write: 0.7,
    book: 0.7,
    leaves: 0.9,
    garden: 0.9,
    bark: 0.9,
    carpenter: 0.7,
    sketch: 0.7,
    novel: 0.7,
    desk: 0.1,
    harvest: 0.9,
    lumber: 0.7,
    author: 0.3
  },
  harvest: {
    apple: 0.7,
    fruit: 0.7,
    orchard: 0.3,
    tree: 0.7,
    wood: 0.7,
    pencil: 0.9,
    banana: 0.7,
    farm: 0.3,
    forest: 0.7,
    paper: 0.9,
    write: 0.9,
    book: 0.9,
    leaves: 0.7,
    garden: 0.3,
    bark: 0.9,
    carpenter: 0.9,
    sketch: 0.9,
    novel: 0.9,
    desk: 0.9,
    harvest: 0.1,
    lumber: 0.7,
    author: 0.9
  },
  lumber: {
    apple: 0.7,
    fruit: 0.7,
    orchard: 0.7,
    tree: 0.3,
    wood: 0.3,
    pencil: 0.7,
    banana: 0.9,
    farm: 0.7,
    forest: 0.3,
    paper: 0.7,
    write: 0.9,
    book: 0.9,
    leaves: 0.7,
    garden: 0.7,
    bark: 0.3,
    carpenter: 0.3,
    sketch: 0.7,
    novel: 0.9,
    desk: 0.7,
    harvest: 0.7,
    lumber: 0.1,
    author: 0.9
  },
  author: {
    apple: 0.9,
    fruit: 0.9,
    orchard: 0.9,
    tree: 0.9,
    wood: 0.9,
    pencil: 0.1,  // perfect path
    banana: 0.9,
    farm: 0.9,
    forest: 0.9,
    paper: 0.9,
    write: 0.3,
    book: 0.3,
    leaves: 0.9,
    garden: 0.9,
    bark: 0.9,
    carpenter: 0.9,
    sketch: 0.9,
    novel: 0.3,
    desk: 0.3,
    harvest: 0.9,
    lumber: 0.9,
    author: 0.1
  }
};

const resetBtn = document.getElementById("resetBtn");
const modal = document.getElementById("scoreModal");
const closeBtn = document.querySelector(".close-btn");
const finalScoreText = document.getElementById("finalScoreText");

// DOM refs
const wordBankContainer = document.getElementById("wordBankContainer");
const dropSlots = document.querySelectorAll(".drop-slot");
const submitBtn = document.getElementById("submitBtn");
const retryBtn = document.getElementById("retryBtn");
const totalScoreDisplay = document.getElementById("totalScore");

// State
let currentSlotIndex = 0;
let totalScore = 10;
const submittedSlots = new Set(); // track which slots submitted

// Track used words so they cannot be used twice
const usedWords = new Set();

let retryEnabledOnce = false; // Track if retryBtn has been enabled once after first submit
let retryUsed = false; // Track if retryBtn was used (clicked)
let modalDismissed = false;

// Create word bank items and append them
function createWordBank() {
    Object.keys(wordData).forEach((word) => {
        const div = document.createElement("div");
        div.textContent = word;
        div.classList.add("word-bank-item");
        div.setAttribute("draggable", true);

        div.addEventListener("dragstart", (e) => {
            if (usedWords.has(word)) {
                e.preventDefault();
                return;
            }
            e.dataTransfer.setData("text/plain", word);
        });

        wordBankContainer.appendChild(div);
    });
}

function updateWordBankStyles() {
    const wordBankItems = document.querySelectorAll(".word-bank-item");
    wordBankItems.forEach((item) => {
        const word = item.textContent.trim();
        if (usedWords.has(word)) {
            item.classList.add("used");
            item.setAttribute("draggable", false);
            item.style.cursor = "not-allowed";
        } else {
            item.classList.remove("used");
            item.setAttribute("draggable", true);
            item.style.cursor = "grab";
        }
    });
}

function updateCurrentSlotHighlight() {
    dropSlots.forEach((slot, idx) => {
        if (idx === currentSlotIndex) {
            slot.classList.add("current");
        } else {
            slot.classList.remove("current");
        }
    });
}

function updateSubmitButton() {
    const currentSlot = dropSlots[currentSlotIndex];
    const hasWord = currentSlot.textContent.trim() !== "" && !currentSlot.classList.contains("score");
    const isSubmitted = submittedSlots.has(currentSlotIndex);

    submitBtn.disabled = !(hasWord && !isSubmitted);
}

// Setup drop slots with drag/drop
function setupDropSlots() {
    dropSlots.forEach((slot, idx) => {
        slot.addEventListener("dragover", (e) => {
            e.preventDefault();
            slot.classList.add("drag-over");
        });
        slot.addEventListener("dragleave", (e) => {
            slot.classList.remove("drag-over");
        });
        slot.addEventListener("drop", (e) => {
            e.preventDefault();
            slot.classList.remove("drag-over");

            // Only allow dropping on the current slot
            if (idx !== currentSlotIndex) {
                alert("Please drop a word into the current active box.");
                return;
            }

            // Don't allow if already submitted
            if (submittedSlots.has(idx)) {
                alert("You have already submitted this box.");
                return;
            }

            const droppedWord = e.dataTransfer.getData("text/plain");
            if (!wordData.hasOwnProperty(droppedWord)) {
                alert("Invalid word!");
                return;
            }

            if (usedWords.has(droppedWord)) {
                alert("You cannot use the same word twice.");
                return;
            }

            const existingWord = slot.textContent.trim();
            if (existingWord && usedWords.has(existingWord)) {
                usedWords.delete(existingWord); // make it reusable
            }

            slot.textContent = droppedWord;

            usedWords.add(droppedWord);
            updateWordBankStyles();

            updateSubmitButton();
        });
    });
}

function getRelation(word1, word2) {
    if (wordData2D[word1] && wordData2D[word1][word2] !== undefined) {
        return wordData2D[word1][word2];
    } else if (wordData2D[word2] && wordData2D[word2][word1] !== undefined) {
        return wordData2D[word2][word1];
    } else {
        alert(word1);
    }
}

// Submit button click handler
submitBtn.addEventListener("click", () => {
    const slot = dropSlots[currentSlotIndex];
    const word = slot.textContent.trim();

    if (!word) {
        alert("Please drag a word into the current box before submitting.");
        return;
    }
    if (submittedSlots.has(currentSlotIndex)) {
        alert("You already submitted this box.");
        return;
    }

    let previousWord = "apple";
    if (currentSlotIndex > 0) {
        const prevSlot = dropSlots[currentSlotIndex - 1];
        previousWord = prevSlot.textContent.trim().split("-")[0].trim();
    }

    const scoreVal1 = getRelation(previousWord, word);

    let scoreLabel = slot.querySelector(".score");
    if (!scoreLabel) {
        scoreLabel = document.createElement("div");
        scoreLabel.classList.add("score");
        slot.appendChild(scoreLabel);
    }
    scoreLabel.textContent = `-${scoreVal1.toFixed(2)}`;
    scoreLabel.style.fontWeight = "normal";

    totalScore -= scoreVal1;
    totalScoreDisplay.textContent = totalScore.toFixed(2);
    submittedSlots.add(currentSlotIndex);

    // Enable retry button only on the first submit ever
    if (!retryEnabledOnce && !retryUsed) {
        retryBtn.disabled = false;
        retryBtn.classList.remove("used");
        retryEnabledOnce = true;
    }

    updateSubmitButton();

    if (currentSlotIndex === dropSlots.length - 1) {
        const scoreVal2 = getRelation(word, "author");

        setTimeout(() => {
            const endWordEl = document.querySelector(".end-word");
            if (endWordEl) {
                const secondScoreLabel = document.createElement("div");
                secondScoreLabel.classList.add("score");
                secondScoreLabel.textContent = `- ${scoreVal2.toFixed(2)}`;
                endWordEl.appendChild(secondScoreLabel);
            }

            totalScore -= scoreVal2;
            totalScoreDisplay.textContent = totalScore.toFixed(2);

            if (!modalDismissed) {
                setTimeout(() => {
                    finalScoreText.textContent = totalScore.toFixed(2);
                    modal.classList.add("active");

                    // Game ended - transform retryBtn into permanent Reset button
                    transformRetryToReset();
                }, 1000);
            }
        }, 800);
    } else {
        currentSlotIndex++;
        updateCurrentSlotHighlight();
        updateSubmitButton();
    }
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    modalDismissed = true;
});

// Retry button click handler: undo last submission and disable retry forever
retryBtn.addEventListener("click", () => {
    if (retryUsed) return; // Already used once, do nothing

    if (currentSlotIndex < 0) return;

    if (currentSlotIndex > 0) currentSlotIndex--;

    const slot = dropSlots[currentSlotIndex];
    const word = slot.textContent.trim().split("-")[0].trim();

    usedWords.delete(word);
    updateWordBankStyles();

    const lastScoreEl = slot.querySelector(".score");
    if (lastScoreEl) {
        const lastScore = parseFloat(lastScoreEl.textContent.replace("-", "").trim());
        if (!isNaN(lastScore)) {
            totalScore += lastScore;
            totalScoreDisplay.textContent = totalScore.toFixed(2);
        }
        lastScoreEl.remove();
    }

    submittedSlots.delete(currentSlotIndex);
    slot.textContent = "";

    updateCurrentSlotHighlight();
    updateSubmitButton();

    // Disable retry button forever after use
    retryUsed = true;
    retryBtn.disabled = true;
    retryBtn.classList.add("used");
});

// Transform retryBtn into a permanent reset button at the end of the game
function transformRetryToReset() {
    retryBtn.disabled = false;
    retryBtn.classList.remove("used");
    retryBtn.textContent = "Reset";
    retryBtn.onclick = () => location.reload();
}
function enableMobileDragFix() {
    const draggableItems = document.querySelectorAll('.word-bank-item');
    draggableItems.forEach(item => {
        item.addEventListener('touchmove', (e) => {
            e.preventDefault();
        }, { passive: false });
    });
    
    const dropSlots = document.querySelectorAll('.drop-slot');
    dropSlots.forEach(slot => {
        slot.addEventListener('touchmove', (e) => {
            e.preventDefault();
        }, { passive: false });
    });
}

// Initialization
function init() {
    totalScoreDisplay.textContent = totalScore.toFixed(2);
    retryBtn.disabled = true;  // disabled at start
    retryBtn.textContent = "Retry";
    retryBtn.classList.remove("used");
    retryEnabledOnce = false;
    retryUsed = false;
    modalDismissed = false;
    totalScore = 10;
    currentSlotIndex = 0;
    submittedSlots.clear();
    usedWords.clear();

    // Clear all slots and word bank (if needed)
    dropSlots.forEach(slot => {
        slot.textContent = "";
        const scoreEl = slot.querySelector(".score");
        if (scoreEl) scoreEl.remove();
    });
    wordBankContainer.innerHTML = "";

    createWordBank();
    enableMobileDragFix();
    setupDropSlots();
    updateCurrentSlotHighlight();
    updateSubmitButton();
}

window.onload = init;
