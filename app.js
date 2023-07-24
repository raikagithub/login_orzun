const toSignup =document.querySelector('.create');
const toLogin =document.querySelector('.login-account');

const signContent =document.querySelector('.content-signup');
const loginContent =document.querySelector('.content-login');

toSignup.addEventListener('click', function(e){
  e.preventDefault();
signContent.style.opacity ='1';
signContent.style.transform ='translateX(0)';
signContent.style.zIndex ='100';

loginContent.style.opacity ='0';
loginContent.style.transform ='translateX(-100px)';


});
toLogin.addEventListener('click', function(e){
    e.preventDefault();
  loginContent.style.opacity ='1';
  loginContent.style.transform ='translateX(0)';

  signContent.style.zIndex ='1';
signContent.style.transform ='translateX(-100px)';
signContent.style.opacity ='0';

  });