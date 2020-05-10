const digit = document.querySelector(".digit");
const next = document.querySelector(".next");
const cancel = document.querySelector(".cancel");
const yes = document.querySelector(".yes");
const nel = document.querySelector(".no");
const sms = document.querySelector(".sms");
const star = document.querySelector(".star");
const money = document.querySelector(".money");
const dolar = document.querySelector(".signo");
const info = document.querySelector(".info");
let pin = 1234;
let saldo = 500;
let  veces = 1;



star.addEventListener("click", Mostrar);



    function Mostrar() {
        document.getElementById('money').style.display = 'none';
        cancel.textContent="" ;
        yes.textContent="";
        nel.textContent="";
        dolar.textContent="";
        digit.value = "";

        document.getElementById('digit').style.display = 'block';
        star.textContent = "";
    sms.textContent = "digita tu pin";
    next.textContent="aceptar"
 
    }
    next.addEventListener("click", processOne);


   



    function processOne(){
        let userPin = Number(digit.value);
        next.style.marginLeft = "0";
        sms.textContent = "";
    info.textContent="";
 
if (veces === 3) {
    next.textContent="¡Cuenta bloqueada!";
    next.disabled = true;
  digit.disabled = true;
  digit.value = "";
    
    sms.textContent = "pin incorrecto";  
} else {
        
        if (userPin === pin) {
            money.value = "";
            sms.textContent = "¿Cuanto dineros deseas retirar?";  
            document.getElementById('digit').style.display = 'none';
            dolar.textContent="$";
            document.getElementById('money').style.display = 'block';
           yes.textContent="si";
           nel.textContent="no";
           next.textContent="";
    
          } else {  
            sms.textContent = "pin incorrecto";
            veces++;
            digit.value = "";
            digit.focus();
          }  
}
    }
    yes.addEventListener("click", processTwo);
    nel.addEventListener("click", Mostrar);
   

  function processTwo(){

    let saldosol = Number(money.value).toFixed();
if (saldosol <= saldo) {
    info.textContent="";
    document.getElementById('money').style.display = 'none';
    dolar.textContent="";
    yes.textContent="";
    nel.textContent="";
    sms.textContent = "Retiro de: $" +saldosol + " "+ " fue exitoso";
    cancel.textContent="ok" ;
    next.style.marginLeft = "25px";
    saldo = saldo-saldosol;

    cancel.addEventListener("click", Mostrar);
} else {
    dolar.textContent="";
    document.getElementById('money').style.display = 'none';
    yes.textContent="";
    nel.textContent="";
    next.textContent="reintentar";
    sms.textContent = "no tienes esa cantidad ";
    info.textContent="tu saldo actual es de: $" + saldo;
}

  }
  nex.addEventListener("click", Mostrar);
 