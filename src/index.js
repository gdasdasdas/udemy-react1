/**
 分割代入
 */
// const myProfile = {
//   name : "sasas",
//   age : 9090
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}`;
// console.log(message1);

// const {name,age} = myProfile;
// const message2 = `名前は${name}。年齢は${age}`;
// console.log(message2);

const myProfile = ["sasasasasasa", 212121];

const message3 = `な${myProfile[0]}。age${myProfile[1]}`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `name${name},age${age}`;
console.log(message4);
