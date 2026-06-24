export {};
let student: string[] = ["Bank", "Prayut", "Jame", "Jackson", "Maxim"];
let mark: number[]=[50,57,69,54,64];
student.push("Mook");
mark.push(70);
for(let i=0; i<6; i++){
    console.log(`${student[i]}สอบได้: ${mark[i]}คะแนน`);
}
student.pop();
student.forEach((name,index)=>{
    console.log(`นักเรียนคนที่ ${index+1} ชื่อ: ${name}`);
});
