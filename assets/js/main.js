// variabili 

const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const schermo = document.getElementById('result');
const reset = document.getElementById('clear');
const equals = document.getElementById('equals');
let numerovisualizzato= '';
let operator;
let firstNumber;
let secondNumber;
let resultNumber;

// FUNZIONAMENTO TASTI

//numeri
for(let i=0; i<numbers.length; i++){
    numbers[i].addEventListener('click', function(){
        verificaNumero(numbers[i].textContent);
        // switch(numbers[i].textContent){
        //     case '1': 
        //         numerovisualizzato += '1';
        //         break;
        //     case '2': 
        //         numerovisualizzato += '2';
        //         break;
        //     case '3': 
        //         numerovisualizzato += '3';
        //         break;
        //     case '4': 
        //         numerovisualizzato += '4';
        //         break;
        //     case '5': 
        //         numerovisualizzato += '5';
        //         break;
        //     case '6': 
        //         numerovisualizzato += '6';
        //         break;
        //     case '7': 
        //         numerovisualizzato += '7';
        //         break;
        //     case '8': 
        //         numerovisualizzato += '8';
        //         break;
        //     case '9': 
        //         numerovisualizzato += '9';
        //         break;
        //     case '0': 
        //         numerovisualizzato += '0';
        //         break;
            
        // }
        schermo.innerText = numerovisualizzato;
    })
}

// operatori
for(let i=0; i<operators.length; i++){
        operators[i].addEventListener('click', function(){
            if(numerovisualizzato !== ''){
                firstNumber = parseInt(numerovisualizzato);
                numerovisualizzato = '';
                schermo.innerText = '';
                verificaOperazione(operators[i].textContent);
                // switch(operators[i].textContent){
                //     case '+': 
                //         operator = '+';
                //         break;
                //     case '-': 
                //         operator = '-';
                //         break;
                //     case '×': 
                //         operator = '×';
                //         break;
                //     case '÷': 
                //         operator = '÷';
                //         break;
                
                // }
            schermo.innerText= operator;
        }else{
            schermo.innerText='ERR';
        }
        })
    
}

// uguale
equals.addEventListener('click', function(){
    secondNumber = parseInt(numerovisualizzato);
    switch(operator){
        case '+': 
            resultNumber = firstNumber + secondNumber;
            break;
        case '-': 
            resultNumber = firstNumber - secondNumber;
            break;
        case '×': 
            resultNumber = firstNumber * secondNumber;            
            break;
        case '÷': 
            resultNumber = firstNumber / secondNumber;            
            break;
        case undefined:
            resultNumber = 'ERR';
    }
    schermo.innerText= resultNumber;
    // console.log(resultNumber);
})

// reset
reset.addEventListener('click', function(){
    firstNumber = 0;
    secondNumber = 0;
    resultNumber = 0;
    numerovisualizzato='';
    schermo.innerText = '0';
})



// FUNZIONI RICONOSCIMENTO TASTI

function verificaNumero(numero){
    switch(numero){
            case '1': 
                numerovisualizzato += '1';
                break;
            case '2': 
                numerovisualizzato += '2';
                break;
            case '3': 
                numerovisualizzato += '3';
                break;
            case '4': 
                numerovisualizzato += '4';
                break;
            case '5': 
                numerovisualizzato += '5';
                break;
            case '6': 
                numerovisualizzato += '6';
                break;
            case '7': 
                numerovisualizzato += '7';
                break;
            case '8': 
                numerovisualizzato += '8';
                break;
            case '9': 
                numerovisualizzato += '9';
                break;
            case '0': 
                numerovisualizzato += '0';
                break;
            
        }
}


function verificaOperazione(operazione){
    switch(operazione){
        case '+': 
            operator = '+';
            break;
        case '-': 
            operator = '-';
            break;
        case '×': 
            operator = '×';
            break;
        case '÷': 
            operator = '÷';
            break;
        
    }
}


