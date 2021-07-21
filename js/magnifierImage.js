var evt = new Event(),
m = new Magnifier(evt);
var evt1 = new Event(),
m2 = new Magnifier(evt1);
var evt2 = new Event(),
m3 = new Magnifier(evt2);
var evt3 = new Event(),
m4 = new Magnifier(evt3);
var evt4 = new Event(),
m5 = new Magnifier(evt4);
var evt5 = new Event(),
m6 = new Magnifier(evt5);


    m.attach({
      thumb: '#thumb1',
      large: 'images/oyster/watchShow.png',
      mode: 'inside',
      zoom: 3,
      zoomable: true
    });
    m2.attach({
      thumb: '#thumb2',
      large: 'images/oyster/watch1.png',
      mode: 'inside',
      zoom: 3,
      zoomable: true
    });
    m3.attach({
      thumb: '#thumb3',
      large: 'images/oyster/watchCollect.png',
      mode: 'inside',
      zoom: 3,
      zoomable: true
    });
    m4.attach({
      thumb: '#thumb4',
      large: 'images/date/watch2.png',
      mode: 'inside',
      zoom: 3,
      zoomable: true
    });
    m5.attach({
      thumb: '#thumb5',
      large: 'images/date/watch1.png',
      mode: 'inside',
      zoom: 3,
      zoomable: true
    });
    m6.attach({
      thumb: '#thumb6',
      large: 'images/date/watch3.png',
      mode: 'inside',
      zoom: 3,
      zoomable: true
    });

//   function getId(idName){
//
//     path = getPath(idName)
//     console.log(path)
//     var evt = new Event(),
//       m = new Magnifier(evt);
//     m.attach({
//       thumb: '#'+idName.id,
//       large: path,
//       mode: 'inside',
//       zoom: 3,
//       zoomable: true
//     });
//   }
//
//
//
// function getPath(idName){
//   if(idName.id == 'thumb1'){
//     return ( 'images/oyster/watchShow.png');
//   }
//   else if(idName.id == 'thumb2'){
//     return ( 'images/oyster/watch1.png');
//   }
//   else if(idName.id == 'thumb2'){
//     return ( 'images/oyster/watchCollect.png');
//   }
// }
