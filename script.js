const answers = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes – definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy, try again',
  'Better not tell you now',
  'Ask again later',
  'Cannot predict now',
  'Concentrate and ask again',
  'Don\'t count on it',
  'Outlook not so good',
  'My sources say no',
  'Very doubtful'
];

const ball = document.querySelector('.ball');
const answerEl = document.querySelector('#answer');
const shakingSound = new Audio('shaking-sound.mp3');

function shakeBall() {
  ball.classList.add('shake-animation');
  shakingSound.play();
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    answerEl.textContent = answers[randomIndex];
    ball.classList.remove('shake-animation');
  }, 2000);
}

// Preload the shaking sound
shakingSound.preload = 'auto';

document.querySelector('#shake-btn').addEventListener('click', shakeBall);


