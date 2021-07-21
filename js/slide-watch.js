const right = document.querySelector('.feature-arrow-right');
const left = document.querySelector('.feature-arrow-left');

const watch_slide = document.querySelector('.feature-watch-list');

const watch_show = document.querySelectorAll('.feature-slide');

const Window_size = watch_show[0].clientWidth;

let temp = 1;

// 
// watch_show.forEach((card)=>{
//
//  card.style.transform = 'translateX('+((Window_size )+910)+'px)';
//
//
//
// })
right.addEventListener('click',()=>{

  watch_show.forEach((card)=>{
    card.style.transition = 'transform 0.5s ease';
   card.style.transform = 'translateX('+((Window_size * temp )+910)+'px)';



  })
temp++;

})


left.addEventListener('click',()=>{

  watch_show.forEach((card)=>{
    card.style.transition = 'transform 0.5s ease';
   card.style.transform = 'translateX('+((-Window_size * temp )+910)+'px)';

  })
temp--;

})

watch_show.forEach((card)=>{
  card.addEventListener('transitionend',()=>{
    console.log(card.id)
  })
})
