function menu(){
    const navLinks = document.getElementsByClassName("nav-links")[0];
    const menuBtn = document.getElementsByClassName("menu-btn")[0];
    const shop = document.getElementsByClassName("fa-shop")[0];

    if(navLinks.style.visibility == "visible"){
        navLinks.style.visibility = "hidden";
        navLinks.style.marginTop = "-273px";
        
        /*navLinks.style.display = "none";*/
        shop.style.display = "none";
        menuBtn.className ="menu-btn fa-solid fa-bars";
    }else{
       /* navLinks.style.display = "block";*/
       navLinks.style.visibility = "visible";
        navLinks.style.marginTop = "0px"
        shop.style.display = "block";
        menuBtn.className = "menu-btn fa-solid fa-xmark";
    }
}