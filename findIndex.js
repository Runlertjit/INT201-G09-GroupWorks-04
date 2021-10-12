// EX : 1
let ages = [3, 10, 18, 20]; // สร้าง Array ที่มี Element เป็น Integer
function checkAge(age) { 
  return age > 18; // สร้าง function ขึ้นมา โดยให้ Return age > 18
}
console.log(`index : ${ages.findIndex(checkAge)}`) // Returns 3 (Index ช่องที่ 3 จากใน Array)
// เรียกใช้งาน finIndex โดย Function รับค่า Array ที่มี Element เป็น Integer
// Arrow Function :  let findAge = ages.findIndex(age => age > 18);


// EX : 2
let ranks = [1, 5, 7, 8, 10, 7]; // สร้าง Array ที่มี Element เป็น Integer
let findRank = ranks.findIndex(function (rank){
    return rank === 7; // สร้าง function ขึ้นมา โดยให้ Return rank ที่มี DataType เดียวกันและมีค่าเท่ากับ 7
})
console.log(`index : ${findRank}`); // Return 2 (Index ช่องที่ 2 จากใน Array)
// Arrow Function :  let findRank = ranks.findIndex(rank => rank === 7);


// EX : 3
let str = ['Hello','Hi','Morning']; // สร้าง Array ที่มี Element เป็น String
function checkStr (str,index){
    return str === 'Hi' && index > 1; 
    // สร้าง function ขึ้นมา โดยให้ Return str ที่มี DataType เดียวกันและมีค่าเท่ากับ Hi และ Index > 1
}
console.log(`index : ${str.findIndex(checkStr)}`); 
// Arrow Function :  let findStr = str.findIndex((str,index) => str === 'Hi' && index > 1);


// EX : 4
function printArr (str,index,arr){
    console.log(arr) // ให้แสดง Array ที่เข้ามา Test Function
}
str.findIndex(printArr) //จะแสดง Array ตามจำนวนข้อมูลภายใน Array 



const result = [
    {name:'John', grade: 'A', id: 1001 },
    {name:'Ben', grade: 'C', id: 1002 },
    {name:'Anthony', grade: 'B', id: 1003 },
    {name:'Tim', grade: 'B', id: 1004 }
  ]

// EX : 5
let checkResultId = result.findIndex(function (value){
    return value.id % 2 == 0 })
// รับ result ที่เป็น Object เข้ามาเพื่อหาว่า Object.value ตัวไหนที่ Mod 2 เท่ากับ 0 
console.log(checkResultId);
// Arrow Function :  let checkResultId = result.findIndex(value => value.id % 2 == 0);


// EX : 6
let checkResultGrade = result.findIndex(function (value){
    return value.grade === 'B' })
// รับ result ที่เป็น Object เข้ามาเพื่อหาว่า Object.grade ตัวไหนที่มีค่าเท่ากับ B
console.log(checkResultGrade);
// Arrow Function :  let checkResultGrade = result.findIndex(value => value.grade === 'B');


// EX : 7
let checkResult = result.findIndex(function (value,index){
    return value.name === 'Tim' && index != 0 }) 
// รับ result ที่เป็น Object เข้ามาเพื่อหาว่า Object.name ตัวไหนที่มีค่าเท่ากับ Tim และ index ไม่เท่ากับ 0
console.log(checkResult);
// Arrow Function :  let checkResult = result.findIndex((value,index) => value.name === 'Tim' && index != 0);