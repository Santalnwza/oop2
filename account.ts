export{}
let status : string = "ปกติ";
let payment : number = 3000;
console.log(`สถานะ: ${status}`);
console.log(`ยอดเงินที่ใช้จ่าย: ${payment}`);

if(status ==="ปกติ" && payment>5000){
    console.log("ท่านได้รับการเลื่อนสถานะเป็นบัตรทอง");
}else if(status !=="ปกติ" && payment<=5000){
    console.log("ท่านได้รับการเพิ่มวงเงิน");
}else{
    console.log("บัตรของท่านมีปัญหา กรุณาติดต่อเจ้าหน้าที่");
}