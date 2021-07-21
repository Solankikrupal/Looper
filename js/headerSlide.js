const slidetrack1 = document.querySelector('.slide-track1');
const slide_track_slide = document.querySelectorAll('.slide_track_slide');
const slide_left =document.querySelector('.slide_left');
const slide_right = document.querySelector('.slide_right')

const slideSize = slide_track_slide[0].clientWidth;
var temp3 = 0;

slide_track_slide.forEach((slide,item)=>{
  slide_right.addEventListener('click',()=>{
    temp3++;
    frameColor(temp3)
    slide.style.transition = 'transform 0.5s ease';
    slide.style.transform = 'translateX('+(-slideSize) +'px)';

    console.log(item)


  })
  slide_left.addEventListener('click',()=>{
    // console.log(temp3)
    if(temp3 == 0){
      temp3 = 0;
    }
    else{
      temp3--;
      console.log(temp)
    }
    frameColor(temp3)
    slide.style.transition = 'transform 0.5s ease';
    slide.style.transform = 'translateX(0px)';
    console.log(item)

  })




})
const headcontainer = document.querySelector('.header-container');
const bgColor = document.querySelector('.bgColor');
const bgColor2 = document.querySelector('.bgColor2');
const searchField = document.querySelector('.searchField');
const searchField1 = document.querySelector('.input-field');
const slidemenuBar = document.querySelector('.slide-Menu-bar');
const uperSlide = document.querySelector('.Category-slide');
const showWatch = document.querySelector('.showWatch');
const hideWatch = document.querySelector('.hideWatch');
const forms = document.querySelector('.card-form');
const about = document.querySelector('.about');
const collections = document.querySelector('.collections');
const bgImgtag= document.querySelector('.bgImgtag');
const about_container = document.querySelector('.about-container');
const collection_detail = document.querySelector('.collection-detail');
const collection_describe =document.querySelector('.collection-describe');
const watchShow = document.querySelectorAll('.watch-show')
/*so bacically wat happing in this function is that you have to make class for individual watch slider
and add, how to add if in future you want to add new watch so if temp 3 and as number of slide next ;
on that basis color will be decide and remove the previous class and new one
you can also add font as well
*/

function frameColor(temp){
  if(temp == 0){
    // bgColor.classList.remove('bgColor');
    // headcontainer.classList.add('frame1');
    //   headcontainer.classList.remove('frame2');
    gsap.fromTo(headcontainer,{background: "linear-gradient(180deg, rgba(45, 34, 34, 0.76) 0%, rgba(45, 34, 34, 0.19) 100%"},{background: "rgba(0, 0, 0, 0.9)",duration:"0.5",ease:'sine.out'});
    gsap.fromTo(about,{background:"#D5D2D2"},{background: "#1A1A1A",duration:"0.5",ease:'sine.out'})
        gsap.fromTo(collections,{background:"#D5D2D2"},{background: "#1A1A1A",duration:"0.5",ease:'sine.out'})
        gsap.to(bgImgtag,{opacity:'0.3',duration:"0.5",ease:'sine.out'})
        gsap.to(collection_detail,{color: "white",duration:"0.5",ease:'sine.out'})
        gsap.to(collection_describe,{color:"#A3A3A3",duration:"0.5",ease:'sine.out'})
        watchShow.forEach((show)=>{
          gsap.to(show,{background: "linear-gradient(90deg, #343333 -17.02%, #343333 -2.25%, rgba(52, 51, 51, 0.92) 13.07%, rgba(52, 51, 51, 0.89) 25.44%, rgba(52, 51, 51, 0.88) 43.11%, rgba(52, 51, 51, 0.68) 57.25%, rgba(52, 51, 51, 0.88) 70.79%, #343333 85.52%, rgba(52, 51, 51, 0.57) 97.3%, rgba(52, 51, 51, 0.61) 109.08%, rgba(52, 51, 51, 0.93) 127.75%)",duration:"0.5",ease:'sine.out'})
        })
        searchField.classList.add('bgColor2');



      slidemenuBar.classList.add('bgColor')
      slidemenuBar.classList.remove('frame2')


          uperSlide.classList.remove('frame2');
          uperSlide.classList.add('backColor1');

          forms.style.background = '#232222';

          slide_track_slide.forEach((slide)=>{
            slide.classList.add('hideWatch');
            slide.classList.remove('showWatch');
          })

          slide_track_slide[temp].classList.add('showWatch');

  }
  if(temp == 1){

    // bgColor.classList.remove('bgColor');
    //
    // headcontainer.classList.remove('frame1');
    // headcontainer.classList.add('frame2');

gsap.fromTo(headcontainer,{background: "rgba(0, 0, 0, 0.9)"},{background: "linear-gradient(180deg, rgba(45, 34, 34, 0.76) 0%, rgba(45, 34, 34, 0.19) 100%",duration:"0.5",ease:'sine.out'})
    gsap.fromTo(about,{background:"#1A1A1A"},{background: "#D5D2D2",duration:"0.5",ease:'sine.out'})
    gsap.fromTo(collections,{background:"#1A1A1A"},{background: "#D5D2D2",duration:"0.5",ease:'sine.out'})
    gsap.to(bgImgtag,{opacity:'0.7',duration:"0.5",ease:'sine.out'})
    gsap.to(about_container,{background: "rgba(0, 0, 0, 0.53)",duration:"0.5",ease:'sine.out'})
    gsap.to(collection_detail,{color: "#1A1A1A",duration:"0.5",ease:'sine.out'})
    gsap.to(collection_describe,{color:"rgba(12, 11, 11, 0.83)",duration:"0.5",ease:'sine.out'})
    watchShow.forEach((show)=>{
      gsap.to(show,{background: "linear-gradient(57.94deg, rgba(208, 208, 208, 0) -20.35%, rgba(249, 249, 249, 0.6) -5.19%, rgba(255, 255, 255, 0.55) 16.15%, rgba(38, 29, 49, 0.43) 60.09%, rgba(55, 43, 71, 0.61) 91.76%, #403253 110.84%, rgba(72, 56, 93, 0.3) 127.31%)",duration:"0.5",ease:'sine.out'})
    })
    searchField.classList.remove('bgColor2');


    searchField.classList.add('frame2SearchField');



      slidemenuBar.classList.remove('bgColor')
    slidemenuBar.classList.add('frame2')

    uperSlide.classList.add('frame2');
    uperSlide.classList.remove('backColor1');

    forms.style.background = 'linear-gradient(180deg, #F8F7FB 0%, #919193 100%)';

    slide_track_slide.forEach((slide)=>{
      slide.classList.add('hideWatch');
      slide.classList.remove('showWatch');
    })

    slide_track_slide[temp].classList.add('showWatch');




  }
}
