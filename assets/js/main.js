
////////////////////////////////////// carousel
$(document).ready(function(){
  $(".carousel").owlCarousel({
    // options
    margin: 10,
    cellAlign: "center",
    contain: true,
    wrapAround: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 1000,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600:{
        items:1,
        nav:false
      },
      1200:{
        items:1,
        nav:false
      }
    },
  });

  $(".logo__carousel").flickity({
    // options
    cellAlign: "center",
    contain: true,
    wrapAround: true,
    autoPlay: true,
    pageDots: false,
    prevNextButtons: false,
  });
})

///******************************

////////////////////////////////////// tabs
let tariffTarget = Array.from(
  document.querySelectorAll(".tariff__heading__tab button")
);

tariffTarget.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    e.stopPropagation();
    let tariffTargetSelected = document.querySelector(
      `[data-target='${elem.getAttribute("data-source")}']`
    );

    let tariffTargetRemove = document.querySelector(".mega-tab.active");
    tariffTargetRemove.classList.remove("active");
    tariffTargetRemove.classList.add("d-none");

    tariffTargetSelected.classList.remove("d-none");
    tariffTargetSelected.classList.add("active");
  });
});

let tariffButton = document.querySelectorAll(".tariff__heading__tab button");
tariffButton.forEach((elem) => {
  elem.addEventListener("click", function () {
    let activeTariffButton = document.querySelector(
      ".tariff__heading__tab button.activee"
    );
    activeTariffButton.classList.remove("activee");
    elem.classList.add("activee");
  });
});
///******************************




////////////////////////////////////// tabs

let innovationsTabsSource = Array.from(
  document.querySelectorAll(".innovations__tabs ul a")
);
innovationsTabsSource.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    e.stopPropagation();

    let innovationsTabsTarget = document.querySelector(
      `[data-target="${elem.getAttribute("data-source")}"]`
    );
    let innovationsTabsTargetActive = document.querySelector(
      ".innovations__cards.active"
    );

    innovationsTabsTargetActive.classList.remove("active");
    innovationsTabsTargetActive.classList.add("d-none");

    innovationsTabsTarget.classList.remove("d-none");
    innovationsTabsTarget.classList.add("active");
  });
});

let innovationTabsButton = document.querySelectorAll(".innovations__tabs ul a");
innovationTabsButton.forEach((elem) => {
  elem.addEventListener("click", function () {
    let innovationTabsButtonActive = document.querySelector(
      ".innovations__tabs ul a.activee"
    );
    innovationTabsButtonActive.classList.remove("activee");
    elem.classList.add("activee");
  });
});
///******************************





let sideBar=document.querySelector('.mobile .bar');
sideBar.addEventListener('click',function(e){
  e.preventDefault();
 let sideMenu=document.querySelector('.side__menu');
 sideMenu.style.transform=`translateX(0%)`;
})
let sideClose=document.querySelector('.side__menu i');
sideClose.addEventListener('click',()=>{
  let sideMenu=document.querySelector('.side__menu');
  sideMenu.style.transform=`translateX(-100%)`;
})


//////////////////////////////////// calculator
let text1=document.querySelector('#text1');
let text2=document.querySelector('#text2');
let text3=document.querySelector('#text3');
let text4=document.querySelector('#text4');

let range1=document.querySelector('#range1');
let range2=document.querySelector('#range2');
let range3=document.querySelector('#range3');
let range4=document.querySelector('#range4');

text1.addEventListener('input',()=>{
  range1.value=text1.value;
})
text2.addEventListener('input',()=>{
  range2.value=text2.value;
})
text3.addEventListener('input',()=>{
  range3.value=text3.value;
})
text4.addEventListener('input',()=>{
  range4.value=text4.value;
})

range1.addEventListener('input',()=>{
  text1.value=range1.value;
})
range2.addEventListener('input',()=>{
  text2.value=range2.value;
})
range3.addEventListener('input',()=>{
  text3.value=range3.value;
})
range4.addEventListener('input',()=>{
  text4.value=range4.value;
})

let option=document.querySelectorAll('.option');
option.forEach((elem)=>{
  elem.addEventListener('click',function(){
  let total=0;
  let optionChecked=document.querySelectorAll('input[type="checkbox"]:checked');
  optionChecked.forEach((elem)=>{
    total+=parseInt(elem.value);
  })
  let result=document.querySelector('.total-calc');
  let calcResult=parseInt(total)+parseInt(text1.value)+parseInt(text2.value)+parseInt(text3.value)+parseInt(text4.value);

  let result2=document.querySelector('.total-calc2');
  let calcResult2=parseInt(total)+parseInt(text1.value)+parseInt(text2.value)+parseInt(text3.value)+parseInt(text4.value);

  result.innerText=calcResult;
  result2.innerText=calcResult2;

  $('.counter').counterUp({
    delay:100,
    time:1000
  })
  })
})
///******************************