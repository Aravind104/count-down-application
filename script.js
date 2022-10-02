const inputField=document.querySelector("#inputField");
const countBtn=document.querySelector(".btn");
countBtn.addEventListener("click",countDown);

function countDown(){
    let countValue=inputField.value;
    let sec=setInterval(function(){
        if(countValue > 0){
            countValue--;
        }
        else{
            countValue=0;
        }
        inputField.value=countValue;
        if(countValue <= 0){
            clearInterval(sec);
        }
    },1000)
}