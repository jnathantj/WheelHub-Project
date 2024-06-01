
    jQuery(document).ready(function($){
        $('.slider-img').on('click',function(){
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
            else {
                $('.slider-img').removeClass('active');
                $(this).addClass('active')
            }
        })
    })
    
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
