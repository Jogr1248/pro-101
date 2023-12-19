// let button = document.getElementById('bin')
// function cliked(){
//     console.log("cliked")
//      h1[0].style.color ='red'
// }
// button.addEventListener('mouseover', cliked)
// button.addEventListener('click', cliked)
// button.addEventListener('click', cliked)
// let input=document.getElementById('search')
// function keyup(){
// console.log('fired')
// }
// input.addEventListener('keyup', keyup)
// let button = document.getElementById('bin')
// let div = document.getElementsByClassName('div')
// function dive(){
//     console.log('clicked')
//    div[0].style.backgroundColor = 'red'
// }
// button.addEventListener('mouseover', dive)
//  let form = document.getElementById('login')
//  function submit(event){
//     // alert('hey')
//     // prompt('bababab')
//     event.preventdefault()
//     let username =event.target.username.value
//     let password =event.target.password.value
//     console.log('submited' ,username ,password)
//  }
//  form.addEventListener('submit',submit)

// function sayHello() {
//    document.write ("Hello World")
//   }
// function over() {
//    document.write ("Mouse Over");
//   }
//   function out() {
//    document.write ("Mouse Out");
//   }
// Get all the cookies pairs in an array
// function ReadCookie()
// {
//  var allcookies = document.cookie;
//  document.write ("All Cookies : " + allcookies );

// cookiearray = allcookies.split(';');
// // Now take key value pair out of this array
// for(var i=0; i<cookiearray.length; i++){
// name = cookiearray[i].split('=')[0];
// value = cookiearray[i].split('=')[1];
// document.write ("Key is : " + name + " and Value is : " + value);
// }
// }
// var mylist = document.getElementById("mylist");
// var first = mylist.children[0];
// first = mylist.firstElementChild;
// var third = mylist.children[2];
// third = mylist.lastElementChild;
// mylist.childNodes[0]; // whitespace text node
// mylist.childNodes[1]; // li node
// mylist.childNodes[2]; // whitespace text node
var myitem = document.createElement('li');
 var mytext = document.createTextNode("New list item");
  myitem.appendChild(mytext);
  mylist.appendChild(myitem);
  mylist.insertBefore(myitem, mylist.children[0]);


  
