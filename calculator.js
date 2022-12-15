//calculator code 

let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');//value adding when user type

for(let i=0; i<btn.length;i++){
    btn[i].addEventListener("click", function() {
        if(this.innerHTML == '=') {
            value.innerHTML = eval(value.innerHTML); //eval - evaluate the expression //evaluate the string as number
        }
        else if(this.innerHTML == 'Clear') {
                    value.innerHTML = '';
        }
        else {
                value.innerHTML += this.innerHTML; //assign the value to the display board
        }
    })
} 

document.querySelector('.toggleBtn').addEventListener("click", function() {
    document.querySelector('body').classList.toggle('dark'), document.querySelector('i').classList.toggle('bi-brightness-low-fill');
    ;
    // document.querySelector('i').classList.toggle('bi-brightness-low-fill');

    

})