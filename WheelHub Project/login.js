function valid(){
    let email = document.getElementById("emailform").value;
    let password = document.getElementById("passwordform").value;
    
    let erroremail = document.getElementById("erroremail");
    let errorpass = document.getElementById("errorpass");

    if(email == ""){
        erroremail.innerHTML = "Email must be filled!";
        setTimeout(errorReset, 5000);
        return false;
        
    } else if(!email.endsWith("@gmail.com")){
        erroremail.innerHTML = "Email must be @gmail.com";
        setTimeout(errorReset, 5000);
        return false;
    
    } else if (!password){
        errorpass.innerHTML = "Password must be filled!";
        setTimeout(errorReset, 5000);
        return false;
    
    } else if(password.length < 3 || password.length > 15){
        errorpass.innerHTML = "Password length must between 3-15 character!";
        setTimeout(errorReset, 5000);
        return false;
    
    }
}


function errorReset(){
    erroremail.innerHTML = "";
    errorpass.innerHTML = "";

}

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