const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--; // decreament maxtime by -1
            return timeText.innerText = maxTime;
        }
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: `Time off! ${correctWord.toUpperCase()} was the correct word`,
            showConfirmButton: false,
            timer: 3000
          })
        
        initGame(); // calling initGame function, so the game restart
    }, 1000);
}

const initGame = () => {
    initTimer(30); // calling inittimer function with passing 15 s maxtime value
    let randomObj = words[Math.floor(Math.random() * words.length)]; //getting random objects from words
    let wordArray = randomObj.word.split(""); // splitting each letter of random word
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // getting random number
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; // shuffling and swiping wordArray letters randomly
    }
    wordText.innerText = wordArray.join(""); // passing shufled word as word text
    hintText.innerText = randomObj.hint; // passing random object hint as hint text
    correctWord = randomObj.word.toLowerCase();; // passing random word to correctword
    inputField.value = ""; // making input field empty
    inputField.setAttribute("maxlength", correctWord.length); //setting input maxlength after value to word length
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase(); // getting user value
    if (!userWord) return  Swal.fire({
        position: 'center',
        icon: 'question',
        title: 'Please enter the word to check!',
        showConfirmButton: false,
        timer: 1500
      });
    if (userWord !== correctWord) return Swal.fire({
        position: 'center',
        icon: 'error',
        title: `Oops! ${userWord} is not a correct word`,
        showConfirmButton: false,
        timer: 3000
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Congrats! ${correctWord.toUpperCase()} is the correct word`,
        showConfirmButton: false,
        timer: 3000
      });
    
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);