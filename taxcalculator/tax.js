// function taxCaculation(nameOfEmployee , salary){
// if (salary <= 300000){
//     console.log(`${nameOfEmployee} there is no tax dedction of you`);
// }
// else if(salary < 600000){
//     let FirstDeduction = (salary - 300000)*0.1
//     console.log(`your tax deduction amount ${FirstDeduction}`);
// }
// else if( salary >= 600000){
//     let SecondDeduction = (salary - 600000)*0.2
//     console.log(`your tax deduction amount ${SecondDeduction}`);

// }
// }
// taxCaculation("mohan" , 2800000)






function taxCalc() {
    var name = document.getElementById("Empolyeename").value;
    var salary = parseFloat(document.getElementById("EmpolyeeSalary").value);

    if (salary <= 300000) {
        document.getElementById("deduction1").value = "0";
        document.getElementById("deduction2").value = "0";
        document.getElementById("totalDeduction").value = "0";
        document.getElementById("result").value = name + " your tax is free";
    } else if (salary < 600000) {
        var deduction1 = 0;
        var deduction2 = (salary - 300000) * 0.1;
        var totalDeduction = deduction1 + deduction2;
        document.getElementById("deduction1").value = deduction1;
        document.getElementById("deduction2").value = deduction2;
        document.getElementById("totalDeduction").value = totalDeduction;
        document.getElementById("result").value = name + " your tax amount is " + totalDeduction;
    } else if (salary >= 600000) {
        var deduction1 = 30000;
        var deduction2 = (salary - 300000) * 0.2;
        var totalDeduction = deduction1 + deduction2;
        document.getElementById("deduction1").value = deduction1;
        document.getElementById("deduction2").value = deduction2;
        document.getElementById("totalDeduction").value = totalDeduction;
        document.getElementById("result").value = name + " your tax amount is " + totalDeduction;
    }
}
