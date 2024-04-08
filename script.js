let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});

function openPopup() {
    window.open('https://example.com', 'popupWindow', 'width=600,height=400');
}

function showAlert() {
    alert('Please enter your email here!!!');
}

document.addEventListener('DOMContentLoaded', function() {
  const productsLink = document.querySelector('.navbar a[href="#"]');
  const productsOptions = document.getElementById('products-options');

  productsLink.addEventListener('click', function(event) {
      event.preventDefault();
      if (productsOptions.style.display === 'none') {
          productsOptions.style.display = 'block';
      } else {
          productsOptions.style.display = 'none';
      }
  });

  // Close the products options if user clicks outside the dropdown
  document.addEventListener('click', function(event) {
      if (!productsOptions.contains(event.target) && event.target !== productsLink) {
          productsOptions.style.display = 'none';
      }
  });
});
