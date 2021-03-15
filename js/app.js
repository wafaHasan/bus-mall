'use strict';

// let goatArray = [
//   'cruisin-goat',
//   'float-your-goat',
//   'goat-out-of-hand',
//   'kissing-goat',
//   'sassy-goat',
//   'smiling-goat',
//   'sweater-goat'
// ];

// const imageSection = document.getElementById( 'myDiv' );
// const leftImage = document.getElementById( 'left' );
// const rightImage = document.getElementById( 'right' );

// let leftGoatIndex = 0;
// let rightGoatIndex = 0;
// const clickCounter = 15;

// function Goat( name ) {
//   this.name = name;
//   this.image = `./img/${name}.jpg`;
//   this.clicks = 0;
//   this.shown = 0;
//   Goat.all.push( this );
// }

// Goat.all = [];
// Goat.counter = 0;

// for( let i = 0; i < goatArray.length; i++ ) {
//   new Goat( goatArray[i] );
// }

// function renderNewGoat() {
//   let leftIndex = randomNumber( 0, Goat.all.length - 1 );
//   leftImage.src = Goat.all[leftIndex].image;
//   leftImage.alt = Goat.all[leftIndex].name;
//   leftGoatIndex = leftIndex;

//   let rightIndex;
//   do {
//     rightIndex = randomNumber( 0, Goat.all.length - 1 );
//   } while( leftIndex === rightIndex );

//   rightImage.src = Goat.all[rightIndex].image;
//   rightImage.alt = Goat.all[rightIndex].name;
//   rightGoatIndex = rightIndex;

//   Goat.all[leftIndex].shown++;
//   Goat.all[rightIndex].shown++;


//   // rightImage.src = Goat.all[0].image;
// }

// function handelClick( event ) {

//   if( Goat.counter <= clickCounter ) {
//     const clickedElement = event.target;
//     if( clickedElement.id === 'leftImage' || clickedElement.id === 'rightImage' ) {
//       if( clickedElement.id === 'leftImage' ) {
//         Goat.all[leftGoatIndex].clicks++;
//       }

//       if( clickedElement.id === 'rightImage' ) {
//         Goat.all[rightGoatIndex].clicks++;
//       }

//       Goat.counter++;
//       renderNewGoat();

//       console.log( Goat.all );
//     }
//   }
// }

// myDiv.addEventListener( 'click', handelClick );

// console.log( Goat.all );

// // Helper function
// function randomNumber( min, max ) {
//   return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
// }

// renderNewGoat();

let emojiArr = ['corona','kiss','laugh','love','smile','stupid'];


let leftEmojiIndex = 0;
let rightEmojiIndex = 0;
Emojis.all = [];
const stopAfter = 3;
Emojis.stop = 0;
function Emojis ( name ){
  this.name = name,
  this.image = `./assets/${name}.jpg`;
  this.clicks=0;
  this.shown=0;
  Emojis.all.push( this );
}

// [1]
for ( let i =0; i<emojiArr.length;i++ ){
  new Emojis( emojiArr[i] );

}

// [2]
const myDiv = document.getElementById( 'myDiv' );
const left = document.getElementById( 'left' );
const right = document.getElementById( 'right' );

function render() {
  let leftIndex = randomNumber( 0 , Emojis.all.length - 1 );
  leftEmojiIndex = leftIndex;

  let rightIndex;
  do {rightIndex = randomNumber( 0 , Emojis.all.length - 1 );}
  while ( leftIndex === rightIndex );
  rightEmojiIndex = leftIndex;

  left.src = Emojis.all[leftIndex].image;
  left.alt = Emojis.all[leftIndex].name;
  right.src = Emojis.all[rightIndex].image;
  right.alt = Emojis.all[rightIndex].name;

  Emojis.all[leftIndex].shown++;
  Emojis.all[rightIndex].shown++;
}


render();


function handelClick ( event ) {

  if ( Emojis.stop < stopAfter ) {
    const clickedElement = event.target;
    if ( clickedElement.id === 'left' || clickedElement.id === 'right' ) {
      if ( clickedElement.id === 'left' ) {
        Emojis.all[leftEmojiIndex].clicks++;
      }
      if ( clickedElement.id === 'right' ) {
        Emojis.all[rightEmojiIndex].clicks++;
      }

      Emojis.stop++;


      render(); }
  }


}
myDiv.addEventListener( 'click' , handelClick );

function randomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}




const myData = document.getElementById( 'myData' );

function handelButtonClick() {
  const myData = document.getElementById( 'myData' );

  const ulElement = document.createElement( 'ul' );
  myData.appendChild( ulElement );

  for ( let i = 0; i < Emojis.all.length; i++ ) {
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `${Emojis.all[i].name} had ${Emojis.all[i].clicks} votes, and was seen ${Emojis.all[i].shown} times.`;
  }

  // document.getElementById( 'button' ).style.display = 'block';
  // this.style.display = 'none';

  myData.removeEventListener( 'click', handelButtonClick );
}
myData.addEventListener( 'click', handelButtonClick );


