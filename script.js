function generateNumber(){
    const min = Math.ceil(document.querySelector('.input-min').value);
    const max = Math.floor(document.querySelector('.input-max').value);
    const result = Math.floor(Math.random()*(max-min + 1 )) + min;

    const paragraph =  document.querySelector('.p');

    let currentNumber = min;

    const interval = setInterval(() =>{
        currentNumber ++;
        if(currentNumber > max){
            clearInterval(interval);
            paragraph.textContent =  result;
        } else{
            paragraph.textContent = currentNumber
        }
        
    },50);
}
