// 試著不用 resverse 方法來將 array 內的元素前後順序對調
// 學習目標： 使用for迴圈 + push來完成任務
const friends = ["Harry", "Ron", "Snap", "Mike", "Grace"];
const reversed_friends = [];

for (let i = 0; i < friends.length; i++ ) {
    let resverse_number = friends.length - i - 1
    reversed_friends.push(friends[resverse_number])
}
