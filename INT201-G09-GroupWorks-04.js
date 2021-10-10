
// let player = [ {name:"Jojo", id:40000},
// {name:"Prayut", id:8400},
// {name:"banglee", id:69},
// {name:"Meow", id:9},
// {name:"Oreo", id:10},
// {name:"Jojo", id:15000} ];

// player.sort(function(a, b) {
//     let nameA = a.name.toUpperCase(); // สร้างตัวแปรเพื่อรับค่า Parameter ที่รับมาแปลงให้เป็นตัวพิมพ์ใหญ่ทั้งหมด
//     let nameB = b.name.toUpperCase(); // สร้างตัวแปรเพื่อรับค่า Parameter ที่รับมาแปลงให้เป็นตัวพิมพ์ใหญ่ทั้งหมด
//     if (nameA < nameB) { // return -1; ถ้าเปรียบเทียบ UTF-16 แล้ว A<B  A จะขยับไปอยู่ทางขวาของ B
//     } if (nameA > nameB) { // return 1;ถ้าเปรียบเทียบ UTF-16 แล้ว A<B  A จะขยับไปอยู่ทางซ้ายของ B
//     } return 0; }); // ถ้า A = B จะอยู่ที่เดิม

// player.sort(function (a,b) { return a.id - b.id; })


// player.sort(function (a, b) {
//     return a.name.localeCompare(b.name);
// });

// console.log(player)

// let ages = [3, 10, 18, 20]; // สร้าง Array ที่มี Element เป็น Integer
// function checkAge(age) { 
//   return age > 18; // สร้าง function ขึ้นมา โดยให้ Return age > 18
// }

// console.log(`index : ${ages.findIndex(checkAge)}`) // Returns 3 (Index ช่องที่ 3 จากใน Array)
// // เรียกใช้งาน finIndex โดย Function รับค่า Array ที่มี Element เป็น Integer


// let ranks = [1, 5, 7, 8, 10, 7]; // สร้าง Array ที่มี Element เป็น Integer
// let index = ranks.findIndex(function (rank){
//     return rank === 7; // สร้าง function ขึ้นมา โดยให้ Return rank ที่มี DataType เดียวกันและมีค่าเท่ากับ 7
// })

// console.log(`index : ${index}`); // Return 2 (Index ช่องที่ 2 จากใน Array)


// let str = ['Hello','Hi','Morning']; // สร้าง Array ที่มี Element เป็น String
// function checkStr (str,index){
//     return str === 'Hi' && index > 1; 
//     // สร้าง function ขึ้นมา โดยให้ Return str ที่มี DataType เดียวกันและมีค่าเท่ากับ Hi และ มีค่า Index > 1
// }

// console.log(`index : ${str.findIndex(checkStr)}`); 

// let str = ['Hello','Hi','Morning']; // สร้าง Array ที่มี Element เป็น String
// function checkStr (str,index,arr){
//     console.log(arr); // ให้แสดง Array ที่เข้ามา Test Function
// }

// console.log(str.findIndex(checkStr)); //จะแสดง Array ตามจำนวนข้อมูลภายใน Array 

// const result = [
//     {name:'John', grade: 'A', id: 1001 },
//     {name:'Ben', grade: 'C', id: 1002 },
//     {name:'Anthony', grade: 'B', id: 1003 },
//     {name:'Tim', grade: 'B', id: 1004 }
//   ]

// let checkResult = result.findIndex(function (value,index,arr){
//   return console.log(arr-1);
// })


// let checkResult = result.findIndex(function (value){
//     return value.id % 2 == 0 
// // รับ result ที่เป็น Object เข้ามาเพื่อหาว่า Object.value ตัวไหนที่ Mod 2 เท่ากับ 0
// }) 

// let checkResult = result.findIndex(function (value){
//     return value.grade === 'B' 
// // รับ result ที่เป็น Object เข้ามาเพื่อหาว่า Object.grade ตัวไหนที่มีค่าเท่ากับ B
// })


// let checkResult = result.findIndex(function (value,index){
//     return value.name === 'Tim' && index != 0
// // รับ result ที่เป็น Object เข้ามาเพื่อหาว่า Object.name ตัวไหนที่มีค่าเท่ากับ Tim และ index ไม่เท่ากับ 0
// }) 
  

// console.log(`index : ${checkResult}`);

// let player = [ {name:"Jojo", id:40000},
//         {name:"Prayut", id:8400},
//         {name:"banglee", id:69},
//         {name:"Meow", id:9},
//         {name:"Oreo", id:10},
//         {name:"Jojo", id:15000} ];

// player.sort((a,b) => a.name.localeCompare(b.name));
// console.log(player);

// player.sort((a,b) => a.id - b.id );

// function compareName(a,b){
//   return a.name.localeCompare(b.name);
// } 
// player.sort(compareName);

// console.log(player);
