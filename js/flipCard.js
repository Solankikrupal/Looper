const cardform =document.querySelector('.card-form');
const createBtn = document.querySelector('.fliptoCreateAccount');
const loginBtn = document.querySelector('.fliptoCreateAccount1');
const signBtn = document.querySelector('.signinBTn');
const register_container = document.querySelector('.register-container');
createBtn.addEventListener('click',()=>{

  cardform.style.transform = 'rotateY(180deg)';
})
loginBtn.addEventListener('click',()=>{
  cardform.style.transform = 'rotateY(-180deg)';
})

var clickCount = 1;
signBtn.addEventListener('click',()=>{

  if(clickCount == 1){
    gsap.fromTo(register_container,{height: "0" ,scale:"0"},{height: "613px",scale:"1",duration:"0.5",ease:'power3.inOut',transformOrigin:'center'})
    clickCount--
  }
  else if(clickCount == 0){
      gsap.fromTo(register_container,{height: "613px" ,scale:"1"},{height: "0px",scale:"0",duration:"0.5",ease:'power3.inOut',transformOrigin:'center'})
        clickCount++;
  }



})
