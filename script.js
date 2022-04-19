// let menu = document.querySelector('#menu-btn');
// let navabr = document.querySelector('.navbar');

//  menu.onclickc= () =>{
//      menu.classList.toggle('fa-times');
//      navabr.classList.toggle('active');
//  }
 
//  window.onclickc= () =>{
//      menu.classList.remove('fa-times');
//      navabr.classList.remove('active');
//  }
 

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}