const thumbnail1 = document.querySelector('.thumbnail1');
const thumbnail2 = document.querySelector('.thumbnail2');
const thumbnail3 = document.querySelector('.thumbnail3');

const thumbnail = document.querySelectorAll('.thumbnail');
const maxSlider = document.querySelectorAll('.max-slider ')
thumbnail.forEach((thumb,item)=>{

thumb.addEventListener('click',()=>{
  const show = document.querySelectorAll('.show')
  const frame = document.querySelector('.frame');

  show.forEach((x)=>{
    x.classList.remove('show');
  })
  maxSlider[item].classList.add('show');

  frame.classList.remove('frame');
  thumb.classList.add('frame');

})

})
