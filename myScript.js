//basic math functions to be used in the operate function below
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


//array that holds the whole equation
const equation = [];

function add_element(arg) {
    //adds elements to array 'equation' after clicking the appropriate button
    equation.push(arg);
    //combines digits into numbers if necessary, separates the array on mathematical 
    //operations symbols
    if (equation.length > 1) {
        for (let i=0; i < equation.length; i++){
            if (equation[i] != "*" && equation[i] != "/" && equation[i] != "+" && equation[i] != "-"){
                if (equation[i+1] != '*' && equation[i+1] != '/' &&
                equation[i+1] != '+' && equation[i+1] != '-'){
                    let equation_part = equation.slice(i, i+2)
                    let concatenated_digit = equation_part.join('');
                    equation.splice(i, 2, concatenated_digit)
                }
        }
    }
        console.table(equation);
}
//converts the elements into numbers, ignores the symbols for mathematical operations
for (let i=0; i < equation.length; i++){
    if (equation[i] != "*" && equation[i] != "/" && equation[i] != "+" && equation[i] != "-"){
        equation[i] = parseFloat(equation[i])
    }
}
    //displays the elements of the equation, not separated by a comma (normal case, since it's an array)
    document.getElementById('display').innerHTML =`${equation.join('')}`;
}

//defines what happens after clicking the '=' sign
function operate() {
    console.table(equation)
    
    while (equation.includes('*') || equation.includes('/')) {
        for (let i=0; i < equation.length; i++){
        if (equation[i] === '*'){
            let multiplication_result = multiply(equation[i-1], equation[i+1]);
            equation.splice(i-1, 3, multiplication_result);
            // document.getElementById('display').innerHTML =`${equation.join('')}`;
            }
        if (equation[i] === '/'){
            let division_result = divide(equation[i-1], equation[i+1]);
            equation.splice(i-1, 3, division_result);
            // document.getElementById('display').innerHTML =`${equation.join('')}`;
            }
    }
}

while (equation.includes('+') || equation.includes('-')) {
    for (let i=0; i < equation.length; i++){
    if (equation[i] === '+'){
        let addition_result = add(equation[i-1], equation[i+1]);
        equation.splice(i-1, 3, addition_result);
        // document.getElementById('display').innerHTML =`${equation.join('')}`;
        }
    if (equation[i] === '-'){
        let subtraction_result = subtract(equation[i-1], equation[i+1]);
        equation.splice(i-1, 3, subtraction_result);
        // document.getElementById('display').innerHTML =`${equation.join('')}`;
        }
}
}
document.getElementById('display').innerHTML =`${equation.join('')}`;
}

//defines what happens after clicking the 'C' sign (clears all entries)
function clear_everything(){
    equation.length = 0;
    document.getElementById('display').innerHTML =`${equation.join('')}`;

}

//defines what happens after clicking the 'CE' sign (clears the last entry)
function clear_last_entry() {
    // for (let i = 0; i < equation.length; i++){
        if (typeof equation[equation.length-1] == 'number'){
            let num = equation[equation.length-1].toString()
            new_num = num.slice(0,-1)
            if (new_num.length > 0) { 
            new_num = Number(new_num)
            }
            console.log(new_num)
            equation[equation.length-1] = new_num

            console.log(equation)
        }
        else {
            equation.pop()
            console.log(equation)

        }
        document.getElementById('display').innerHTML =`${equation.join('')}`;
    }

