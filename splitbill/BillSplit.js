// function splitBill(){
//     const amount = parseInt(document.getElementById("amount").value);
//     const numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);
//     const warningElement1 = document.getElementById("warning1");
//     const warningElement2 = document.getElementById("warning2");

//     // Check if the amount is a valid positive number
//     if (isNaN(amount) || amount <= 0) {
//         warningElement1.textContent = "Please enter a valid amount.";
//         return;
//     } else {
//         warningElement1.textContent = "";
//     }

//     // Check if the number of people is greater than one
//     if (isNaN(numberOfPeople) || numberOfPeople <= 1) {
//         warningElement2.textContent = "No need to split the bill.";
//         return;
//     } else {
//         warningElement2.textContent = " ";
//     }

//     // Calculate the split amount
//     const splitAmount = amount/numberOfPeople;
//     document.getElementById("result").value = `Each person should pay: ${splitAmount.toFixed(2)}`;

// }
// function splitAmount() {
//     let amount = parseInt(document.getElementById("amount").value);
//     let people = parseInt(document.getElementById("People").value);
//     let warningmsg1 = document.getElementById("warningmsg1");
//     let warningmsg2 = document.getElementById("warningmsg2");


//     //Warning Message While Entering Amount
//     if (isNaN(amount)||amount<=0) {
//         warningmsg1.textContent = "Please provide valid amount";
//         return;
//     } 
//     else {
//         warningmsg1.textContent = "";
//     }


//     //Warning Message While Entering Number of Peoples
//     if (isNaN(people)||people<2) {
//         warningmsg2.textContent = "Value should be greater than 1";
//         return;
//     } 
//     else {
//         warningmsg2.textContent = "";
//     }

    
//     //Splitting Bill Amount
//     let splitAmount = amount/people;
//     document.getElementById("result").value = ` ${splitAmount.toFixed(2)}`;

// }


function splitBill(){
    const amount = parseInt(document.getElementById("amount").value);
    const numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);
    const warningElement1 = document.getElementById("warning1");
    const warningElement2 = document.getElementById("warning2");

    // Check if the amount is a valid positive number
    if (isNaN(amount) || amount <= 0) {
        warningElement1.textContent = "Please enter a valid amount.";
        return;
    } else {
        warningElement1.textContent = "";
    }

    // Check if the number of people is greater than one
    if (isNaN(numberOfPeople) || numberOfPeople <= 1) {
        warningElement2.textContent = "No need to split the bill.";
        return;
    } else {
        warningElement2.textContent = "";
    }

    // Calculate the split amount
    const splitAmount = amount/numberOfPeople;
    document.getElementById("result").value = `Each person should pay: ${splitAmount.toFixed(2)}`;
}


// tax amount

// function TaxConvorter(name,salary){
//     name= document.getElementById("Empolyeename").value;
//     salary=document.getElementById("EmpolyeeSalary").value;

//     if(salary <= 300000){
//         document.getElementById("Deduction1").value = "0";
//         document.getElementById("Deduction2").value = "0";
//         document.getElementById("Total-Deduction").value = "0";
//         document.getElementById("Result").value =name+" your tax free"
//     }

//     else if(salary < 600000){
//         Dedction1="0"
//         Deduction2=(salary-300000)*0.1;
//           totalDeduction=Deduction1+Deduction2;
//           document.getElementById("Deduction1").value = Deduction1;
//           document.getElementById("Deduction2").value = Deduction2;
//           document.getElementById("Total-Deduction").value = totalDeduction;
//           document.getElementById("Result").value =name+"your tax Amount"+totalDeduction;
//     }

//     else if(salary > 600000){
//         Dedction1= 30000
//         Deduction2=(salary-300000)*0.2;
//           totalDeduction=Deduction1+Deduction2;
//           document.getElementById("Deduction1").value = Deduction1;
//           document.getElementById("Deduction2").value = Deduction2;
//           document.getElementById("Total-Deduction").value = totalDeduction;
//           document.getElementById("Result").value =name+"your tax Amount"+totalDeduction;

// }

// }
