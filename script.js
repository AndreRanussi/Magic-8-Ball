const button = document.querySelector("button");
const display = document.querySelector(".result");
const input = document.querySelector("#question");
const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook is good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

const answerGenerator = function () {
  let randomNumber = Math.floor(Math.random() * answers.length);
  const result = answers[randomNumber];
  display.textContent = result;
  display.style.fontSize = "1rem";

  setTimeout(function () {
    display.textContent = "8";
    display.style.fontSize = "5rem";
    input.value = "";
  }, 1500);

  console.log(result);
};

button.addEventListener("click", answerGenerator);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    answerGenerator();
  }
});
