const watchlist = document.querySelector('.watch-list');
const watchSlide = document.querySelectorAll('.watch-slide');

const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');
const size = watchSlide[0].clientWidth;

watchSlide.forEach(slide=>{
  slide.style.transition = 'transform 1s ease';
  slide.style.transform = 'translateX('+(size + 100)+'px)'

})
let counter = 1;
leftBtn.addEventListener('click',()=>{
  leftBtn.classList.remove('active');
  leftBtn.classList.add('hidden');
  rightBtn.classList.remove('hidden');
  rightBtn.classList.add('active');

  watchSlide.forEach(slide=>{
    slide.style.transition = 'transform 1.5s ease';
    slide.style.transform = 'translateX('+(size + 100)+'px)'

  })

})
rightBtn.addEventListener('click',()=>{
  console.log(leftBtn.classList)
  leftBtn.classList.remove('hidden');
  leftBtn.classList.add('active');
  rightBtn.classList.remove('active');
  rightBtn.classList.add('hidden');
  watchSlide.forEach(slide=>{
    slide.style.transition = 'transform 1.5s ease';
    slide.style.transform = 'translateX('+-(size + 100)+'px)'

  })

})
