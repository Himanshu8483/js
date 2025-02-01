let signup=()=>{
    let signname=document.querySelector("#name").value
    let signemail=document.querySelector("#email").value
    let signnum=document.querySelector("#number").value
    let signpass=document.querySelector("#pass").value

    if(signname==""){
        let err=document.querySelector("#name")
        err.style.border="1px solid red";
        return false;
    }

    localStorage.setItem("name", signname)
    localStorage.setItem("email", signemail)
    localStorage.setItem("number", signnum)
    localStorage.setItem("password", signpass)

    location.href="login.html";
    return false;

}

let login=()=>{
    let loginname=document.querySelector("#loginname").value
    let loginpass=document.querySelector("#loginpass").value

    let localname=localStorage.getItem("name")
    let localpass=localStorage.getItem("password")

    if(loginname==localname && loginpass==localpass){
        location.href="home.html";

    }else {
        alert("invalid Name or Password")
    }
    return false;
}

let logout=()=>{
    localStorage.clear()
    location.href="login.html"
}

// ==================================================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});