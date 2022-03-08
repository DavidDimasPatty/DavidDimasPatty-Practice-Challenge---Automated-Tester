const submit = document.querySelector("#submit");
submit.addEventListener('click', function() {
    const username=document.querySelector("#username").value;
        const password=document.querySelector("#password").value;
        console.log(username+" "+password)  
        if(username=='topcoder' && password=='rocks'){
            document.location.href = "/survey";
            document.getElementById('wrong').style.visibility="hidden";
        }
        else{
            document.getElementById('wrong').style.visibility="visible";
        }
  });
  

window.onload = function () {
    setTimeout(function () {
        login();
    }, 1000);
}

function login(){
        document.getElementById('popupbox').style.visibility="visible";
}

