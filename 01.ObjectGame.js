// 物件概念學習
// 學習目標： 使用物件以及調用物件方法、屬性
let Frieren = {
  name: "Frieren",
  age: 2300,
  height: 164,
  race: "elf",
  walk_speed: 10,

  flyingMagic() {
    return this.walk_speed * 20
  }
};

console.log(Frieren.flyingMagic());
console.log(Frieren.race);
console.log(Frieren['race']);
