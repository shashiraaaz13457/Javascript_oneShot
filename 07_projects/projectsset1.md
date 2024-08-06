# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
      case 'white':
        body.style.backgroundColor = e.target.id;
      case 'blue':
        body.style.backgroundColor = e.target.id;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
      case 'Violet':
        body.style.backgroundColor = e.target.id;
    }
  });
});



```

## project 2 solution

```javascript
const form = document.querySelector('form'); // Due to submit button.
// If you take the value outside then the empty value will be stored in height and weight.
// const weight = document.querySelector('#id');
// const height = document.querySelector('#height');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // const weight = document.querySelector('#id').value;//This gives value in string
  //To convert this value in Integer we use parseInt.
  const weight = parseInt(document.querySelector('#weight').value);
  const height = parseInt(document.querySelector('#height').value);
  const results = document.querySelector('#results');
  //Checks
  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //show results
    // results.innerHTML = `<span>${BMI}</span>`;
    if(BMI < 18.6){
      results.innerHTML = `<span>Under Weight <br> ${BMI}</span>`;
    }
    else if(BMI > 18.6 && BMI < 24.9){
      results.innerHTML = `<span>Normal Weight <br> ${BMI}</span>`;
    }
    else{
      results.innerHTML = `<span>Over Weight <br> ${BMI}</span>`;
    }


    // if(parseInt(results.value) < 18.6){
    //   results.innerHTML = `<span>Under Weight <br> ${BMI}</span>`;
    // }
    // else if(parseInt(results.value) > 18.6 && parseInt(results.value) < 24.9){
    //   results.innerHTML = `<span>Normal Weight <br> ${BMI}</span>`;
    // }
    // else{
    //   results.innerHTML = `<span>Over Weight <br> ${BMI}</span>`;
    // }
  }
});


```

## project 3 solution code

```javascript
const clock = document.getElementById('clock')

// let date = new Date();

//This method gives us the time at particular interval which you set.
//Two parameters are there (function(){},Time Interval)
setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000);


```

## project 4 solution


```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
//This is used to hide the remaining value after 10 guesses.
const startOver = document.querySelector('.resultParas');

const p = document.querySelector('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over.Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
//HIorLow
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}
 // cleaning
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = 'false';
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playgame = true;
  });
}



```


# Project 5 solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

# Project 6 Solution

```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```