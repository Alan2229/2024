const click = document.getElementById("Click")

function find_edit(){
    x = document.getElementsByTagName('span')[1]
    if(x.textContent[1]>='A' && x.textContent[1]<='Z' || x.textContent[1]>='a' && x.textContent[1]<='z') 
        x.innerHTML="Рапилбек"
    else
       x.innerHTML="Rapilbek"
    x =document.getElementsByTagName('span')[2]
    if(x.textContent[1]>='A' && x.textContent[1]<='Z' || x.textContent[1]>='a' && x.textContent[1]<='z') 
        x.innerHTML="Алан"
    else
       x.innerHTML="Alan"
    x=document.getElementsByTagName('span')[3]
    if(x.textContent[1]>='A' && x.textContent[1]<='Z' || x.textContent[1]>='a' && x.textContent[1]<='z') 
        x.innerHTML="28 мая 2004 года"
    else
       x.innerHTML="May 28, 2004"
}

click.addEventListener("click",find_edit)