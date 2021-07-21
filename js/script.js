const ExploreBtn = document.querySelectorAll('.Explore');
const oysterWatchSec = document.querySelectorAll('.oyster-watch')
const next1 = document.querySelector('.nextBtn');
const previous =document.querySelector('.previous');
const feature5 = document.querySelector('.feature5');
const explore_target = document.querySelectorAll('.Explore_aTag');

function scrollpage(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  // console.log(target);
  // console.log(targetPosition);
  // console.log(startPosition);
  // console.log(distance);
  var startTime = null;

  function animation(currentTime) {
    // console.log('animation')
    // console.log('before ct '+currentTime);
    if (startTime === null) {
      startTime = currentTime;
    }
    // console.log('after ct '+currentTime);
    // console.log('start time '+startTime);
    var timeElapsed = currentTime - startTime;
    // console.log('timeElapsed '+timeElapsed);
    var run = ease(timeElapsed,startPosition,distance,duration);
    window.scrollTo(0,run);
    if (timeElapsed<duration){
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  requestAnimationFrame(animation);

}
const exploreMobile = document.querySelectorAll('.exploreMobile');
exploreMobile.forEach((ExploreBtn,item)=>{
  ExploreBtn.addEventListener('click',()=>{
    oysterWatchSec[item].classList.toggle('displayWatchContainer');
    var goto = explore_target[item].getAttribute('href');
    scrollpage(goto,1500);
  })
})
ExploreBtn.forEach((ExploreBtn1,item)=>{
  ExploreBtn1.addEventListener('click',()=>{
    oysterWatchSec[item].classList.toggle('oyster-watch-hide');
    var goto = explore_target[item].getAttribute('href');
    scrollpage(goto,1500);
  })
})


next1.addEventListener('click',()=>{
  feature5.style.transform = 'translateX(0px)';
})
previous.addEventListener('click',()=>{
    feature5.style.transform = 'translateX(100%)';
})


const slideMenuBar = document.querySelector('.slide-Menu-bar');
const menuBar = document.querySelector('.menuBtn');

menuBar.addEventListener('click',()=>{
  slideMenuBar.classList.toggle('slideMenuIn');
  category_slide.classList.remove('actual-position');
})


const category_watchImg = document.querySelectorAll('.category-watch img');
const block = document.querySelectorAll('.block');
const category_name = document.querySelectorAll('.category-name');

category_watchImg.forEach((watch,index)=>{
  watch.addEventListener('mouseover',()=>{
    block[index].classList.add('actual-position');
    category_name[index].classList.add('actual-position');
  })
  watch.addEventListener('mouseout',()=>{
    block[index].classList.remove('actual-position');
    category_name[index].classList.remove('actual-position');
  })
})

const category_slide = document.querySelector('.Category-slide');
const CategoryBtn = document.querySelector('.category-btn');

CategoryBtn.addEventListener('click',()=>{
  slideMenuBar.classList.remove('slideMenuIn');
  category_slide.classList.toggle('actual-position');
})
/*sign in field*/

const fieldName = document.querySelector('.field_name');
const fieldInput = document.querySelector('.field-input');

// fieldInput.addEventListener('click',()=>{
//   fieldName.style.transition = 'transform 0.5s ease-out';
//   fieldName.style.transform = 'translateY(-100px)';
// })
