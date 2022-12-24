const password = document.getElementById("password")
const btn = document.getElementById("btn")
let marginTemp = 7;
let turn = 0; 
btn.addEventListener("mouseover",()=>{
    if(password.value.length<6){
        if(marginTemp>15 && turn==0){
            marginTemp = 0
            turn=1
        }else if(marginTemp>15 && turn==1){
            marginTemp = 0
            turn=0
        }
        turn==0? btn.style.marginLeft = `${marginTemp}rem`: btn.style.marginRight = `${marginTemp}rem`
        marginTemp+=8
    }else{
        btn.style.backgroundColor = "green"
    }
    console.log(password.value)
})