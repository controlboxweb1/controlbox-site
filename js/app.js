

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

// Main

var navMobile = document.getElementById("nav-1");
var buttonMain = document.getElementById("button-mobile");
var buttonHamburger = document.createElement("a");
buttonHamburger.setAttribute("class" , "fi-list");
var tagLink = document.createTextNode("Main");
buttonHamburger.appendChild(tagLink);
buttonMain.appendChild(buttonHamburger);


(function(){
 buttonHamburger.addEventListener("click", function(){
   navMobile.classList.toggle("show-element" );
 })
}())


// footer

var footerCb = document.getElementById("footer");
var contentRow = document.createElement("div");
contentRow.setAttribute("class" , "row");
var divOne = document.createElement("div");
divOne.setAttribute("class" , "large-3 medium-4 columns");
var divTwo = document.createElement("div");
divTwo.setAttribute("class" , "large-9 medium-8 columns");

footerCb.appendChild(contentRow);
contentRow.appendChild(divOne);
contentRow.appendChild(divTwo);

var titlePhone = document.createElement("p");
titlePhone.innerHTML = "<p class='title-footer fi-telephone'>worldwide Telephones</p>";

var phoneList = document.createElement("ul");
phoneList.innerHTML = "<li><p><span>US</span> +1 646 205 0571</p></li> <li><p><span>UK</span> +44 20 7048 6733</p></li> <li><p><span>CH</span> +41 22 533 0995</p></li> <li><p><span>CO</span> +57 1 695 2258</p></li> <li><p><span>MZ</span> +64 9 973 4785</p></li> <li><p><span>GT</span> +502 2353 5433</p></li> <li><p><span>MX</span> +52 664 2317809</p></li> <li><p><span>ES</span> +34 902 043179</p></li> <li><p><a href'mailto:i@controlbox.net'>i@controlbox.net</a></p></li>";

divOne.appendChild(titlePhone);
divOne.appendChild(phoneList);


var titleCB =  document.createElement("p");
titleCB.innerHTML = "<p class='title-footer'>ControlBox Corp.</p>";


var textBox =  document.createElement("p");
textBox.setAttribute = ("class" , "text-footer"); 
textBox.innerHTML = "We are a team of highly trained engineers and programmers creating software for cargo and money transfer companies worldwide. Our experience is hard work and our purpose is to provide a competitive customer experience, offering the same service to big and small companies with quality and satisfaction. <br><br> The capabilities and acknowledgment of our personnel is granting us the satisfaction of providing services to larger companies, ControlBox is a company that you can count on. Give us the opportunity to share our experiences, and empower your company with the latest in technology and telecommunications. <br><br> <b> Mailing address </b> <br> 7400 NW 19th Street Suite D, </br> Doral, FL 33126 USA";

divTwo.appendChild(titleCB);
divTwo.appendChild(textBox);

var textLegal = document.createElement("div");
textLegal.setAttribute("style" , "text-align: center; font-size:0.8em;");
textLegal.innerHTML = "<p>ControlBox Corp. 2011 ©</p>";

footerCb.appendChild(textLegal);



// scroll

/*
function scrollFunction() {
  var mainFixed = document.getElementById("header-fixed");
  var refTop = document.getElementById("cargo-system");

   if (mainFixed > refTop) {
      mainFixed.setAttribute("style" , "position: fixed; width:100%; top: 0; z-index: 9;");

   }
}
*/
