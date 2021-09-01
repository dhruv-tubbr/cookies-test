function checkCookie(){
    if(document.cookie.indexOf('lang=')<0){
        alert("No Cookie");
    }
    else{
       if(document.cookie
        .split('; ')
        .find(row => row.startsWith('lang='))
        .split('=')[1]=="jp"){
            if(window.location.pathname=="/jp/"){
            window.location="./japan.html";
            }
            else{
                window.location="./jp/japan.html";
            }
        }
        else{
            window.location="./english.html";
        }
    }
}


function displayCookie(){
    document.querySelector(".output").textContent=document.cookie
    .split('; ')
    .find(row => row.startsWith('lang='))
    .split('=')[1];
}



function setCookie(lang){
    document.cookie ="lang="+lang+";path=/;expires=Wed, 01 Jan 2025 06:23:41 GMT";
}

function setDefaultJp(lang){ 
    
    if(lang=="jp"){
        setCookie("jp");
    }
    if(lang=="en"){
        setCookie("en");
        window.location="../";
    }
    displayCookie();

}

function setDefaultEn(lang){ 
    
    if(lang=="jp"){
        setCookie("jp");
        window.location="./jp";
    }
    if(lang=="en"){
        setCookie("en");
    }
    displayCookie();
}

document.onload=document.querySelector("#display").addEventListener("click",displayCookie);
document.onload=checkCookie();