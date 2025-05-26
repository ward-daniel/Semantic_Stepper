
const wordData2D = {
    fire: {
        fire: 0.1, heat: 0.1, water: 0.3, light: 0.3, cold: 0.9, warm: 0.1, bright: 0.3, summer: 0.7,
        freeze: 0.9, flame: 0.1, day: 0.8, night: 0.8, rain: 0.9, cloud: 0.9, storm: 0.9,
        wind: 0.8, heatwave: 0.6, glow: 0.5, dew: 0.9, shade: 0.8, ice: 0.6, sun: 0.5
    },
    heat: {
        fire: 0.1, heat: 0.1, water: 0.8, light: 0.5, cold: 0.3, warm: 0.1, bright: 0.2, summer: 0.1,
        freeze: 0.6, flame: 0.3, day: 0.4, night: 0.8, rain: 0.9, cloud: 0.9, storm: 0.9,
        wind: 0.8, heatwave: 0.2, glow: 0.6, dew: 0.9, shade: 0.8, ice: 0.7, sun: 0.2
    },
    water: {
        fire: 0.3, heat: 0.8, water: 0.1, light: 0.6, cold: 0.4, warm: 0.7, bright: 0.6, summer: 0.3,
        freeze: 0.5, flame: 0.5, day: 0.5, night: 0.3, rain: 0.1, cloud: 0.2, storm: 0.3,
        wind: 0.4, heatwave: 0.9, glow: 0.5, dew: 0.1, shade: 0.4, ice: 0.2, sun: 0.4
    },
    light: {
        fire: 0.3, heat: 0.5, water: 0.6, light: 0.1, cold: 0.7, warm: 0.3, bright: 0.1, summer: 0.4,
        freeze: 0.8, flame: 0.2, day: 0.1, night: 0.4, rain: 0.7, cloud: 0.6, storm: 0.6,
        wind: 0.6, heatwave: 0.3, glow: 0.2, dew: 0.5, shade: 0.3, ice: 0.7, sun: 0.2
    },
    cold: {
        fire: 0.9, heat: 0.3, water: 0.4, light: 0.7, cold: 0.1, warm: 0.3, bright: 0.7, summer: 0.8,
        freeze: 0.1, flame: 0.9, day: 0.6, night: 0.2, rain: 0.3, cloud: 0.3, storm: 0.4,
        wind: 0.3, heatwave: 0.9, glow: 0.7, dew: 0.2, shade: 0.1, ice: 0.1, sun: 0.7
    },
    warm: {
        fire: 0.1, heat: 0.1, water: 0.7, light: 0.3, cold: 0.3, warm: 0.1, bright: 0.2, summer: 0.1,
        freeze: 0.7, flame: 0.1, day: 0.3, night: 0.6, rain: 0.8, cloud: 0.8, storm: 0.7,
        wind: 0.6, heatwave: 0.1, glow: 0.4, dew: 0.6, shade: 0.5, ice: 0.7, sun: 0.3
    },
    bright: {
        fire: 0.3, heat: 0.2, water: 0.6, light: 0.1, cold: 0.7, warm: 0.2, bright: 0.1, summer: 0.2,
        freeze: 0.8, flame: 0.3, day: 0.2, night: 0.3, rain: 0.6, cloud: 0.6, storm: 0.5,
        wind: 0.6, heatwave: 0.3, glow: 0.2, dew: 0.5, shade: 0.2, ice: 0.6, sun: 0.1
    },
    summer: {
        fire: 0.7, heat: 0.1, water: 0.3, light: 0.4, cold: 0.8, warm: 0.1, bright: 0.2, summer: 0.1,
        freeze: 0.8, flame: 0.6, day: 0.3, night: 0.7, rain: 0.5, cloud: 0.4, storm: 0.5,
        wind: 0.3, heatwave: 0.2, glow: 0.4, dew: 0.6, shade: 0.5, ice: 0.7, sun: 0.2
    },
    freeze: {
        fire: 0.9, heat: 0.6, water: 0.5, light: 0.8, cold: 0.1, warm: 0.7, bright: 0.8, summer: 0.8,
        freeze: 0.1, flame: 0.9, day: 0.6, night: 0.3, rain: 0.3, cloud: 0.3, storm: 0.3,
        wind: 0.4, heatwave: 0.9, glow: 0.7, dew: 0.2, shade: 0.2, ice: 0.1, sun: 0.7
    },
    flame: {
        fire: 0.1, heat: 0.3, water: 0.5, light: 0.2, cold: 0.9, warm: 0.1, bright: 0.3, summer: 0.6,
        freeze: 0.9, flame: 0.1, day: 0.4, night: 0.6, rain: 0.8, cloud: 0.8, storm: 0.7,
        wind: 0.7, heatwave: 0.4, glow: 0.3, dew: 0.8, shade: 0.6, ice: 0.8, sun: 0.3
    },
    day: {
        fire: 0.8, heat: 0.4, water: 0.5, light: 0.1, cold: 0.6, warm: 0.3, bright: 0.2, summer: 0.3,
        freeze: 0.6, flame: 0.4, day: 0.1, night: 0.9, rain: 0.6, cloud: 0.6, storm: 0.6,
        wind: 0.5, heatwave: 0.4, glow: 0.4, dew: 0.5, shade: 0.1, ice: 0.6, sun: 0.2
    },
    night: {
        fire: 0.8, heat: 0.8, water: 0.3, light: 0.4, cold: 0.2, warm: 0.6, bright: 0.3, summer: 0.7,
        freeze: 0.3, flame: 0.6, day: 0.9, night: 0.1, rain: 0.4, cloud: 0.4, storm: 0.4,
        wind: 0.4, heatwave: 0.7, glow: 0.4, dew: 0.3, shade: 0.2, ice: 0.3, sun: 0.6
    },
    rain: {
        fire: 0.9, heat: 0.9, water: 0.1, light: 0.7, cold: 0.3, warm: 0.8, bright: 0.6, summer: 0.5,
        freeze: 0.3, flame: 0.8, day: 0.6, night: 0.4, rain: 0.1, cloud: 0.1, storm: 0.1,
        wind: 0.2, heatwave: 0.9, glow: 0.6, dew: 0.2, shade: 0.3, ice: 0.3, sun: 0.6
    },
    cloud: {
        fire: 0.9, heat: 0.9, water: 0.2, light: 0.6, cold: 0.3, warm: 0.8, bright: 0.6, summer: 0.4,
        freeze: 0.3, flame: 0.8, day: 0.6, night: 0.4, rain: 0.1, cloud: 0.1, storm: 0.2,
        wind: 0.2, heatwave: 0.8, glow: 0.6, dew: 0.2, shade: 0.3, ice: 0.3, sun: 0.5
    },
    storm: {
        fire: 0.9, heat: 0.9, water: 0.3, light: 0.6, cold: 0.4, warm: 0.7, bright: 0.5, summer: 0.5,
        freeze: 0.3, flame: 0.7, day: 0.6, night: 0.4, rain: 0.1, cloud: 0.2, storm: 0.1,
        wind: 0.2, heatwave: 0.9, glow: 0.5, dew: 0.3, shade: 0.4, ice: 0.3, sun: 0.5
    },
    wind: {
        fire: 0.8, heat: 0.8, water: 0.4, light: 0.6, cold: 0.3, warm: 0.6, bright: 0.6, summer: 0.3,
        freeze: 0.4, flame: 0.7, day: 0.5, night: 0.4, rain: 0.2, cloud: 0.2, storm: 0.2,
        wind: 0.1, heatwave: 0.6, glow: 0.5, dew: 0.3, shade: 0.4, ice: 0.3, sun: 0.4
    },
    heatwave: {
        fire: 0.6, heat: 0.2, water: 0.9, light: 0.3, cold: 0.9, warm: 0.1, bright: 0.3, summer: 0.2,
        freeze: 0.9, flame: 0.4, day: 0.4, night: 0.7, rain: 0.9, cloud: 0.8, storm: 0.9,
        wind: 0.6, heatwave: 0.1, glow: 0.4, dew: 0.6, shade: 0.6, ice: 0.8, sun: 0.2
    },
    glow: {
        fire: 0.5, heat: 0.6, water: 0.5, light: 0.2, cold: 0.7, warm: 0.4, bright: 0.2, summer: 0.4,
        freeze: 0.7, flame: 0.3, day: 0.4, night: 0.4, rain: 0.6, cloud: 0.6, storm: 0.5,
        wind: 0.5, heatwave: 0.4, glow: 0.1, dew: 0.5, shade: 0.4, ice: 0.6, sun: 0.3
    },
    dew: {
        fire: 0.9, heat: 0.9, water: 0.1, light: 0.5, cold: 0.2, warm: 0.6, bright: 0.5, summer: 0.6,
        freeze: 0.2, flame: 0.8, day: 0.5, night: 0.3, rain: 0.2, cloud: 0.2, storm: 0.3,
        wind: 0.3, heatwave: 0.6, glow: 0.5, dew: 0.1, shade: 0.2, ice: 0.3, sun: 0.5
    },
    shade: {
        fire: 0.8, heat: 0.8, water: 0.4, light: 0.3, cold: 0.1, warm: 0.5, bright: 0.2, summer: 0.5,
        freeze: 0.3, flame: 0.6, day: 0.1, night: 0.2, rain: 0.3, cloud: 0.3, storm: 0.4,
        wind: 0.4, heatwave: 0.6, glow: 0.4, dew: 0.2, shade: 0.1, ice: 0.4, sun: 0.4
    },
    ice: {
        fire: 0.6, heat: 0.7, water: 0.2, light: 0.7, cold: 0.1, warm: 0.7, bright: 0.6, summer: 0.7,
        freeze: 0.1, flame: 0.8, day: 0.6, night: 0.3, rain: 0.3, cloud: 0.3, storm: 0.3,
        wind: 0.3, heatwave: 0.8, glow: 0.6, dew: 0.3, shade: 0.2, ice: 0.1, sun: 0.6
    },
    sun: {
        fire: 0.5, heat: 0.2, water: 0.4, light: 0.2, cold: 0.7, warm: 0.3, bright: 0.1, summer: 0.2,
        freeze: 0.7, flame: 0.3, day: 0.2, night: 0.6, rain: 0.6, cloud: 0.5, storm: 0.5,
        wind: 0.4, heatwave: 0.2, glow: 0.3, dew: 0.5, shade: 0.4, ice: 0.6, sun: 0.1
    }
}

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

    let previousWord = "ice";
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
        const scoreVal2 = getRelation(word, "sun");

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
    setupDropSlots();
    updateCurrentSlotHighlight();
    updateSubmitButton();
}

window.onload = init;
