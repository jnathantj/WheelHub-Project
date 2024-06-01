let bannerIdx = 0;
showBanner(bannerIdx);
let banner = document.getElementById("banners");
const next = document.getElementById("nxt");
const prev = document.getElementById("prv");

prev.addEventListener("click", ()=>{
  showBanner(bannerIdx--);
  if (bannerIdx < banner.length-1) {
    bannerIdx = banner.length-1;
  }    
})

function showBanner(n) {
  let i;
  let banner = document.getElementsByClassName("banner");

  if (n > banner.length-1) {bannerIdx = 1}
  if (n < banner.length) {bannerIdx = banner.length}
  for (i = 0; i < banner.length; i++) {
    banner[i].style.display = "none";
  }
  banner[bannerIdx-1].style.display = "block";
} 

function bannerCarousel(){
  showBanner(bannerIdx++);
  if (bannerIdx > banner.length-1) {
    bannerIdx = 0;
  }   
  
}
next.addEventListener("click", bannerCarousel)
setInterval(bannerCarousel, 5000);




let offerIdx = 1;

function offerCarousel(){
  let offer = document.getElementById('change' + offerIdx);

  offer.checked = true;
  offerIdx++;

  if(offerIdx > 3){
    offerIdx = 1;
  }
}

setInterval(offerCarousel, 5000);

let burgerBtn = document.getElementById("burger-button");
let dropdown = document.getElementById("dropdwn");

burgerBtn.addEventListener("click", function(){
    if(dropdown.className == "burger-dropdown"){
        dropdown.className += " show-dropdown"
    }else {
        dropdown.className = "burger-dropdown"
        dropdown
    }
})