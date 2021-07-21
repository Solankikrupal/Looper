const cardBtnContainer12 = document.querySelector('.cardBtnContainer');
const back2home = document.querySelector('.cartListBottom')

cardBtnContainer12.addEventListener('click',()=>{
  gsap.fromTo('.cartContainer',{y:'-110%'},{y:'0%',duration:'0.5',ease:'power3.in'})
})

back2home.addEventListener('click',()=>{
    gsap.fromTo('.cartContainer',{y:'0%'},{y:'-110%',duration:'0.51',ease:'power3.in'});

})


const saveHeart = document.querySelectorAll('.saveHeart');
const saveHeart2 = document.querySelectorAll('.saveHeart2');
const saveProduct = document.querySelectorAll('.saveProduct');
const removeProduct = document.querySelectorAll('.removeProduct');
const removeCross = document.querySelectorAll('.removeCross');
var count = 1;
saveHeart.forEach((heart,item)=>{

  heart.addEventListener('mouseover',()=>{
    saveProduct[item].classList.add('showToolTip');
  })
  heart.addEventListener('mouseout',()=>{
    saveProduct[item].classList.remove('showToolTip');
  })


  heart.addEventListener('click',()=>{
    if(count==1){
        saveHeart[item].childNodes[1].setAttribute('fill','red');
        var t2 = gsap.timeline();
        t2.fromTo(saveHeart2[item],{y : '0'},{y:'-150%' , duration : 0.2 , ease : "power3.out"})
         .fromTo(saveHeart2[item],{opacity:1},{opacity:0,duration : 0.1});
        count--;
    }
    else if(count == 0){
        saveHeart[item].childNodes[1].setAttribute('fill','white');
        count++;
    }

})

})

removeCross.forEach((remove,item)=>{
  remove.addEventListener('mouseover',()=>{
    removeProduct[item].classList.add('showToolTip');
  })
  remove.addEventListener('mouseout',()=>{
    removeProduct[item].classList.remove('showToolTip');
  })

})



// const quantityCounter = document.querySelector('.quantityCounter');
const addProductBtn = document.querySelectorAll('.addProduct');
const minusProduct = document.querySelectorAll('.minusProduct');
const quantityCounter = document.querySelectorAll('.quantityCounter');
var quatCount = [];
quantityCounter.forEach((x,item)=>{
  quatCount[item] = Number(x.innerHTML)
})

addProductBtn.forEach((add,item)=>{
    add.addEventListener('click',()=>{
    quatCount[item]++;
    quantityCounter[item].innerHTML = quatCount[item];
  })
})
minusProduct.forEach((minus,item)=>{
  minus.addEventListener('click',()=>{
    if(quatCount[item] == 1){
      quatCount[item] = 1;

    }
    else{
    quatCount[item]--;
    }

    quantityCounter[item].innerHTML = quatCount[item];
  })

})

const buy2Cart = document.querySelector('.buy2Cart');
const watchName = document.querySelector('.watch-cat');
const watchSubName = document.querySelector('.watch-name');
const watchColor = document.querySelector('.watchColor');
const watchImg = document.querySelector('.imgProduct')
const cartWatchName = document.querySelector('.productName')
const cartWatchSubNAme = document.querySelector('.productsubName');
const cartColorName = document.querySelector('.productColorName')
const cartWatchImg = document.querySelector('.productPhoto img');
var inCartArray = [];
buy2Cart.addEventListener('click',(e)=>{


  cartWatchName.innerHTML = watchName.innerHTML;
  cartWatchSubNAme.innerHTML = watchSubName.innerHTML;
  cartColorName.innerHTML = watchColor.innerHTML;
  var imgSrc = watchImg.getAttribute("src")
  cartWatchImg.setAttribute('src',imgSrc)
  var t1 = gsap.timeline()
  t1.fromTo(cardBtnContainer12,{filter: "drop-shadow(0px 0px 0px #000000)"},{filter: "drop-shadow(0px 0px 50px #000000)" , duration : 0.5});
  t1.to(cardBtnContainer12,{filter: "drop-shadow(0px 0px 0px #000000)" , duration : 0.1});
  t1.fromTo(cardBtnContainer12,{x : '1'},{x : '0' , duration:0.3,ease : 'power3.out'});
  t1.fromTo('.notification',{opacity : '0'},{opacity : '1' , duration :0.1 } , "-=0.5");




})
