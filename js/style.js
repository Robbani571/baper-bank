document.getElementById('login-button').addEventListener('click', function(){
    //mail fild
    const mailFild = document.getElementById('mail-fild');
    const userMail = mailFild.value;
    
    //passord fild
    const passordFild = document.getElementById('password-fild');
    const userPassword = passordFild.value;
    
    if(userMail == 'kope@pakra.com' && userPassword == 'secret'){
        window.location.href = 'profile.html';
        
    }
})