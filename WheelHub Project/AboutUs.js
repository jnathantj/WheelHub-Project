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