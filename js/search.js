// var watches = ['Rolex Pepsi','Rolex Root Beer','Rolex Coke','Rolex Batman','Rolex Batgirl','Rolex Fat Lady','Rolex Clint Eastwood',
// 'Rolex Bluesy','Rolex Kermit','Rolex Hulk','Rolex Ceramic Kermit','Rolex Smurf','Rolex Zenith Daytona','Daytona Beach','Rolex Daytona C','Daytona Paul Newman',
// 'Rolex Polar','Rolex Steve McQueen','Rolex James Cameron','Rolex Thunderbird']


var getField = document.querySelector('.input-field');
const searchLabel = document.querySelector('.input-text');
const typeedResult = document.querySelector('.typeedResult');
const searchListName = document.querySelectorAll('.searchListName');
const searchResultList = document.querySelector('.searchResultList');
typeedResult.innerHTML = '';
getField.addEventListener('focus', x)
getField.addEventListener('blur', () => {
  if (getField.value.length > 0) {
    searchLabel.style.visibility = 'hidden';
    gsap.fromTo('.searchResult', {
      height: '100px'
    }, {
      height: '0px',
      duration: 0.5
    })
  } else {
    searchLabel.style.visibility = 'visible';
    gsap.fromTo('.searchResult', {
      height: '100px'
    }, {
      height: '0px',
      duration: 0.5
    })
  }
})
getField.addEventListener('input', () => {

  typeedResult.innerHTML = getField.value;
  var counter = 1;
  getNameOfWatch(getField.value,counter,getField.value.length);
})
 getField.addEventListener('change',()=>{
  console.log('hello')
 })
function x() {
  searchLabel.style.visibility = 'hidden';
  gsap.fromTo('.searchResult', {
    height: '0px'
  }, {
    height: '100px',
    duration: 0.5
  })

}

var x = 0;
var destination = 6;
function getNameOfWatch(name,counter,length) {

  var source = 6;

  var watches = ['Rolex Pepsi', 'Rolex Root Beer', 'Rolex Coke', 'Rolex Batman', 'Rolex Batgirl', 'Rolex Fat Lady', 'Rolex Clint Eastwood',
    'Rolex Bluesy', 'Rolex Kermit', 'Rolex Hulk', 'Rolex Ceramic Kermit', 'Rolex Smurf', 'Rolex Zenith Daytona', 'Daytona Beach', 'Rolex Daytona C', 'Daytona Paul Newman',
    'Rolex Polar', 'Rolex Steve McQueen', 'Rolex James Cameron', 'Rolex Thunderbird'
  ]
// console.log(x++)
  let sizeofList = watches.length;

destination = destination + counter;

  watches.forEach((watch, item) => {
// console.log(watch.slice(source,destination))

     if (watch.slice(source,destination).toLowerCase() == name.slice(0,length) || watch.slice(source,destination).toLowerCase() == name.slice(0,length)) {
       console.log(watch)
         var li = document.createElement('li');
         li.innerHTML = watch;
         li.className = 'searchListName';

         setTimeout(()=>{
          
         },100)

         searchResultList.appendChild(li)


     }

  })

}
