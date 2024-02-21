// 猜數字遊戲，可以猜測0~100之間的數字
// 學習目標： 使用while迴圈 + prompt + if ,else if來完成遊戲
let floor = 0;
let ceil = 100;
let answer = Math.ceil(Math.random() * 100);

while (true) {
  let guess = Number(prompt("Guess a number between" + floor + " and " + ceil));

  if ((guess > ceil) || (guess < floor) || (guess == null) || (typeof guess != "number")) {
    alert("請輸入" + floor + "~" + ceil + "的數字");
    continue;
  }

  if (guess == answer) {
      prompt("Correct!");
      break;
    } else if (guess > answer) {
        ceil = guess;
    } else if (guess < answer) {
        floor = guess;
    }
}
