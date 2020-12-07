function calculator(){

    const a = parseInt(document.querySelector('#numbA').value);
    const b = parseInt(document.querySelector('#numbB').value);
    const op = document.querySelector('input[name="radioCalc"]:checked').value;
    //error mesages
    const stylingAlarm = 'style="font-size: 0.8em;"'
    const errorInputs = `<span ${stylingAlarm}>All inputs must be <u>numbers</u> , <u>no decimal</u> place and <u>5 digits long!</u>!</span>`;
   
    
    if(a.toString().length > 5 || b.toString().length > 5){ 
        return document.querySelector("#resultCalc").innerHTML = errorInputs;
    }else{
        document.querySelector('#resultCalc').innerHTML = '&nbsp;&nbsp;&nbsp;';
    }


    
    switch(op){
        case ('+'):
            return document.querySelector("#resultCalc").innerHTML = (a + b);
        break;
        case ('-'):
            return document.querySelector("#resultCalc").innerHTML = (a - b);
        break;
        case ('*'):
            return document.querySelector("#resultCalc").innerHTML = (a * b);
        break;
        case ('/'):
            return document.querySelector("#resultCalc").innerHTML = (a / b);
        break;
        
    }
    
    
}

function palindromes(){

    const word2Check = document.querySelector('.wordToCheck').value;
    let spliting = word2Check.split("");
    let flipLetterOrder = spliting.reverse();
    let allTog = flipLetterOrder.join('');
    if(word2Check === '') return;
    if(allTog === word2Check){
         return document.querySelector('.resultPali').innerHTML = `${word2Check} it's a palindrome` 
    }else{
         return document.querySelector('.resultPali').innerHTML = `${word2Check} and ${allTog} are NOT palindromes`
    }


}

function caesar(){
    const word = document.querySelector('.wordCaesar').value;
    const key = parseInt(document.querySelector('.keyCaesar').value);
    let deCipher = '&nbsp;';

    if(deCipher == ''){return}
    
    
    //check if uppercase
   function checkUpperCase(word){
    return word === word.toUpperCase();
   }
    
   for(let i = 0; i < word.length; i++){
        if(checkUpperCase(word[i])){ 
            deCipher += String.fromCharCode((word.charCodeAt(i) + key - 65) % 26 + 65);
        }else{
            deCipher += String.fromCharCode((word.charCodeAt(i) + key - 97) % 26 + 97);
        }
    }
    document.querySelector('.resultCaesar').innerHTML = deCipher;
    
}

function fibonacci(){
    let number = parseInt(document.querySelector('.numberFibo').value);

    if(number > 999){
        return document.querySelector('.resultFibo').innerHTML = `Please feed me a small number than 999`;
    }
    let a = 0, b = 1, holdVal;

    while(number >= 0){
        holdVal = a;
        a += b;
        b = holdVal
        number--;
    }
    return document.querySelector('.resultFibo').innerHTML = (b);
}