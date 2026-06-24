let income: number = 15000;
console.log(`Income: ${income}`);

//คำนวนรายได้ต่อปี
let yincome: number = income * 12;
console.log(`YearIncome: ${yincome}`);

//รายได้ต่อปี น้อยกว่า 100000 อัตราภาษี 5%
//รายได้ต่อปี =100000-200000 อัตราภาษี 7%
//รายได้ต่อปี =200000-500000 อัตราภาษี 10%
//รายได้ต่อปี มากกว่าหรือเท่ากับ 500000 อัตราภาษี 12%
//แสดงผลอัตราภาษีและ ภาษีที่ต้องจ่าย
let rate: number;
if(yincome<100000){
    rate = 5;
} else if(yincome<=200000){
    rate = 7;
} else if(yincome<=500000){
    rate = 10;
} else {
    rate = 12;
}
console.log("Tax Rate: %f %",rate.toFixed(2));
let tax : number = yincome * rate/100;
console.log(`Tax: ${tax.toFixed(2)} บาท`);
