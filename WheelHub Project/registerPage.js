function validate(){
    var test = document.getElementById("test");

    let username = document.getElementById("usernameform").value;
    let email = document.getElementById("emailform").value;
    let password = document.getElementById("passwordform").value;
    let confirm = document.getElementById("confirmform").value;
    let gender = document.getElementsByName("jeniskelamin");
    let dobString = document.getElementById("tanggallahir").value;
    let dob = new Date(dobString);
    let curDate = new Date();
    let checkbox = document.getElementById("checkbox");

    let errorusn = document.getElementById("errorusn");
    let erroremail = document.getElementById("erroremail");
    let errorpass = document.getElementById("errorpass");
    let errorcfp = document.getElementById("errorcfp");
    let errorcheck = document.getElementById("errorcheck");
    let errordob = document.getElementById("errordob");

    // let regist = document.getElementById("signup-btn");

    if(username == ""){
        errorusn.innerHTML = "Username must be filled!";
        setTimeout(errorReset, 5000);
        return false;

    } else if(username.length < 3 || username.length > 15){
        errorusn.innerHTML = "Username length must between 3-15 character!";
        setTimeout(errorReset, 5000);
        return false;

    } else if(email == ""){
        erroremail.innerHTML = "Email must be filled!";
        setTimeout(errorReset, 5000);
        return false;
        
    } else if(!email.endsWith("@gmail.com")){
        erroremail.innerHTML = "Email must ends with @gmail.com";
        setTimeout(errorReset, 5000);
        return false;

    } else if (!password){
        errorpass.innerHTML = "Password must be filled!";
        setTimeout(errorReset, 5000);
        return false;

    } else if(password.length < 8){
        errorpass.innerHTML = "Password length must at least 8 characters!";
        setTimeout(errorReset, 5000);
        return false;

    }else if( !confirm ){
        errorcfp.innerHTML = "Confirm Password must be filled!";
        setTimeout(errorReset, 5000);
        return false;

    } else if( password != confirm ){
        errorcfp.innerHTML = "Password does not match!";
        setTimeout(errorReset, 5000);
        return false; 
        

     } else if (!gender){
        errorpass.innerHTML = "Must pick gender!";
        setTimeout(errorReset, 5000);
        return false;

     } else if(dobString==''){
        errordob.innerHTML = "Please choose a date!";
        setTimeout(errorReset, 5000);
        return false;
        
    } else if(dob > curDate){
        errordob.innerHTML = "Date of birth cannot exceed current date!";
        setTimeout(errorReset, 5000);
        return false;

    } else if (!checkbox.checked){
        errorcheck.innerHTML = "Please agree on the terms & condition!";
        setTimeout(errorReset, 5000);
        return false;

    } else{
        test.reset();
        
    }

    }


     

    
function errorReset(){
    errorusn.innerHTML = "";
    erroremail.innerHTML = "";
    errorpass.innerHTML = "";
    errorcfp.innerHTML = "";
    errorcheck.innerHTML = "";
    errordob.innerHTML = "";
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