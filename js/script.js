//media
var bar = document.getElementById('bar');
var close = document.getElementById('close');
var nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

var switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})


//store


document.addEventListener('DOMContentLoaded', () =>{
	var myForm = document.forms[1];
	myForm.addEventListener('submit', (e)=>{

		e.preventDefault();

		let uName =  document.getElementById('signup-email').value;
		let upass1 =  document.getElementById('signup-password').value;
		let upass2 =  document.getElementById('signup-password-confirm').value;

		console.log(uName);
		console.log(upass1);
    console.log(upass2);

		var connectObj = {

			'username': uName,
			'pass1':upass1,

		}
		localStorage.setItem('contactInfo', JSON.stringify(connectObj));
	})

})

function op(){
    var field2 =document.getElementById("login-email").value;
    var field3 =document.getElementById("login-password").value;
    var myObj = JSON.parse(localStorage.getItem('contactInfo'));


    if(field2===myObj.username && field3===myObj.pass1){
      alert("Welcome in The Website");

       document.getElementById("form_id").action = "Home.html";
}

     else{
         alert("invaild information");
    }
}
// if(field2==="admin" && field3==="12345"){
//
//    document.getElementById("form_id").action = "Home.html";
// }
//
//  else{
//      alert("invaild information");
// }


function validation() {
    var email = document.getElementById('signup-email').value;
    var psw = document.getElementById('signup-password').value;

    var emailcheck = /^([^0-9_-][a-z\.-\d]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    const pswcheck = /^[\w@-]{8,20}$/;

    if (emailcheck.test(email)) {
      document.getElementById('mail').innerHTML = "";
    } else {
      document.getElementById('mail').innerHTML = "**Email-id is invalid";
      return false;
    }
    if (pswcheck.test(psw)) {
      document.getElementById('pass').innerHTML = "";
    } else {
      document.getElementById('pass').innerHTML = "**Should contain digits and special characters";
      return false;
    }

 }

 // shopping cart
//rmove items
if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
}else
{
  ready();
}

function ready(){

 var rmovecartitmes = document.getElementsByClassName('btn-danger');

 //console.log(rmovecartitmes);
for (var i=0; i<rmovecartitmes.length;i++){
  var button = rmovecartitmes[i]
  button.addEventListener('click',function(event){
    var buttonclicked = event.target;

    buttonclicked.parentElement.parentElement.parentElement.remove();

    updatecarttotal();
  })
}
}
// update our total

function updatecarttotal(){

  var cartitemcontainer = document.getElementsByClassName('cart-items');
  var total =0;
  for (var i=0; i<cartitemcontainer.length;i++){
  var cartitemcontainernew = cartitemcontainer[i] ;
  var price = cartitemcontainernew.querySelector('.price');
  var quanity = cartitemcontainernew.querySelector('.quanity');
  var price1 = parseFloat(price.innerText.replace('$',''));
  var quantity1 = quanity.value;
  total = total +(price1*quantity1);
}

document.getElementsByClassName('dooha')[0].innerText=total;
document.getElementsByClassName('dooha2')[0].innerText=(total*0.10).toFixed(2);
document.getElementsByClassName('dooha3')[0].innerText=(total*0.05).toFixed(2);
document.getElementsByClassName('dooha1')[0].innerText=(total + (total*0.15)).toFixed(2);
}


// add to cart



var aaddtocartbuttons = document.getElementsByClassName('shop-item-button');
for (var i=0; i<aaddtocartbuttons.length;i++){
var button = aaddtocartbuttons[i];
button.addEventListener('click', aaddtocartclicked)

}

function aaddtocartclicked(event){
  var button = event.target;
  var shopitem = button.parentElement.parentElement;

  var title = shopitem.getElementsByTagName("h5")[0].innerText;
  var price = shopitem.getElementsByTagName("h4")[0].innerText;
  var image = shopitem.getElementsByTagName("img")[0].src;
  //console.log(price, title, image);

  additemtocart(title, price, image);
}

function additemtocart(title, price, image){
  var cartrow2 = document.createElement('div');
   cartrow2.classList.add('dd1');
var cartrow1 = document.getElementsByClassName('cart-items')[0];


  var rowcontent = `<td><button type="button" class="btn btn-danger"> <i class="far fa-times-circle"></i></button></td>
  <td><img src="./media/pro2.jpg"  alt=""></td>
  <td>Himaliyan Salted Lamp</td>
  <td class="price">$25.99</td>
  <td><input type="number" value="1" name="" class="quanity"></td>
  <td>$25.99</td>`;


  cartrow1.innerHTML = rowcontent;
 cartrow2.appendChild(cartrow1);
  var table = document.getElementById('table1');
  console.log(table);
  table.appendChild(cartrow2);

}


document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}
// document.addEventListener('DOMContentLoaded', ()=>{
// var searchBar =  document.querySelector('#search-item input');
// var list = document.querySelector('.desc h5');
// var myForms = document.forms;
//
// })


function validation11() {

    var cardnumbers = document.getElementsByClassName('card-number-input')[0].value;

    var  cvv= document.getElementsByClassName('cvv-input')[0].value;

    var cardcheck = /^\d{16}$/;
    const cvvcheck = /^\d{3}$/;

    if (cardcheck.test(cardnumbers)) {
      document.getElementsByClassName('card-number-input').innerHTML = "";
    } else {
      alert("invalid Entry It has to be 16 digits only ");
      return false;
    }
    if (cvvcheck.test(cvv)) {
      document.getElementsByClassName('cvv-input').innerHTML = "";
    } else {
      alert("invalid Entry it has to be 3 digidts only");
      return false;
    }

 }
