
// let form = document.getElementById('form')
// let name = document.getElementById('name')
// let age = document.getElementById('age')
// let button = document.getElementById('bin')
// function submit(event){
//     event.preventdefault()
//     console.log('submited')
//  }
//  function alert(){
//     // if(age>18){
//              alert('Hello you are garented ')
//     //      }
//     // else{
//     //             alert('You are not allowed ')
//     //        }
//  }
// form.addEventListener('submit',alert)
// Get the form element
const form = document.getElementById('myForm');
const name = document.getElementById('name').value;
const age = parseInt(document.getElementById('age').value);
form.addEventListener('submit',submit )
function submit(event) {
  event.preventDefault(); 
  
  if (age > 18) {
    alert(`Hello ${name}, you are granted.`);
  } else {
    alert(`Sorry ${name}, you are not allowed.`);
  }
}