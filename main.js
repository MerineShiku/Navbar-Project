const navToggle = document.querySelector(".toggle")
const navLinks = document.querySelector(".links")


//document.getElementById("myDIV").classList -shows all classes
//document.getElementById("myDIV").classList. contains("") checks specific classes
//document.getElementById("myDIV").classList.add("mystyle"); add classes
//document.getElementById("myDIV").classList.remove("mystyle");
//

navToggle.addEventListener("click", function(){
   // if (navLinks.classList.contains("show-links")){
    //    navLinks.classList. remove("show-links")
     //   console.log(navList.classList.contains("links"))
   // }else{
      //  navLinks.classList.add("show-links")
   // }

   navLinks.classList.toggle("show-links")
})
