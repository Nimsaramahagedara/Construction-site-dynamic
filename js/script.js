function menu(){
    const navLinks = document.getElementsByClassName("nav-links")[0];
    const menuBtn = document.getElementsByClassName("menu-btn")[0];
    const shop = document.getElementsByClassName("fa-shop")[0];

    if(navLinks.style.visibility == "visible"){
        navLinks.style.visibility = "hidden";
        navLinks.style.marginTop = "-273px";
        
        /*navLinks.style.display = "none";
        shop.style.visibility = "hidden";*/
        menuBtn.className ="menu-btn fa-solid fa-bars";
        shop.style.marginTop = "0px";
    }else{
       /* navLinks.style.display = "block";*/
       navLinks.style.visibility = "visible";
        navLinks.style.marginTop = "60px"
       /* shop.style.visibility = "visible";
        shop.style.marginTop = "330px";*/
        menuBtn.className = "menu-btn fa-solid fa-xmark";
    }
}