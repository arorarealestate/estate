let selectedProperty = "";

function openForm(property){

    selectedProperty = property;

    document.getElementById("popupTitle").innerHTML =
    property + " Enquiry";

    document.getElementById("contactPopup").style.display="flex";
}

function closeForm(){

    document.getElementById("contactPopup").style.display="none";
}

document.getElementById("gmailLink").onclick=function(){

    let msg=document.getElementById("userMessage").value;

    let subject="Enquiry about "+selectedProperty;

    window.open(
    "mailto:arorarealestate97@gmail.com?subject="
    +encodeURIComponent(subject)
    +"&body="+encodeURIComponent(msg)
    );

}

document.getElementById("whatsappLink").onclick=function(){

    let msg=document.getElementById("userMessage").value;

    window.open(
    "https://wa.me/917637969048?text="
    +encodeURIComponent(
    "Property: "+selectedProperty+"\n\n"+msg
    )
    );

}

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        scrollBtn.style.display = "block";
    }else{
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
// Sticky Navbar

const header = document.querySelector("header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});
// Cursor Glow

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});