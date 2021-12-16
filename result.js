let marks = prompt('Enter Your Marks:');

if(marks >= 0 && marks <= 32 ){
    console.log(`Apni Fail Koresen Appi  abar chasta korun.`);
}else if(marks >= 30 && marks <40) {
console.log(`Apni D paisen`);
}else if(marks >= 40 && marks < 50) {
    console.log(`Apni C paisen`);

}else if(marks >= 50 && marks < 60) {
    console.log(`Apni B paisen`);

}else if(marks >= 60 && marks <70) {
    console.log(`Apni A- paisen`);

}else if(marks >= 70 && marks < 80) {
    console.log(`Apni A paisen`);
}else if(marks >= 80 && marks <= 100) {
    console.log(`Apni A+ paisen`);
    
}else {
    console.log(' Ki korsen Ata vai apnar ki mama Ache');
}  