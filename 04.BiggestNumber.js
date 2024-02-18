// 找出array中最大的數字
// 學習目標： 使用for迴圈
function findBiggest(arr) {
  let biggestNumber = arr[0]
  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "number") {
          if ( arr[i] > biggestNumber) {
              biggestNumber = arr[i];
          }
      } else {
          alert("請輸入數字");
      }
  }
return biggestNumber;
}
