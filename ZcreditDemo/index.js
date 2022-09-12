let name = window.prompt("What is your name?");
let firstAnswer = window.prompt("Are you looking to lend or borrow?");
if (firstAnswer === "lend") {
  let secondAnswer = window.prompt("how much money are you willing to lend?");
  alert(secondAnswer, "will be lent to the first person who needs it!");
} else if (firstAnswer === "borrow") {
  let secondAnswer = window.prompt("how much money are you looking to borrow?");
  alert(
    secondAnswer,
    "will be received from <user> and is due to be returned by <date>"
  );
}
