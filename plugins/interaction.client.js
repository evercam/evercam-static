// window.addEventListener("scroll", function() {
//     if (window.scrollY >= 100) {
//       document.getElementsByClassName("header-transparent").style.backgroundColor = "#111C2 !important";
//     }
// });

export default defineNuxtPlugin(() => {
    onNuxtReady(async () => {
        // const navbar = document.querySelector(".header-transparent");
        // console.log(navbar);

        // window.onscroll = ()=> {
        //     console.log("This is the scroll value", this.scrollY);
        //     this.scrollY > 20 ? navbar.classList.add("sticky-transparent") : navbar.classList.remove("sticky-transparent");
        // }
        const navbar = document.getElementById("header-transparent");
        console.log(navbar);
        window.addEventListener("scroll", function() {
        if (window.scrollY >= 300) {
            console.log("This is the scroll value", window.scrollY);
            navbar.setAttribute('style', 'background-color:#111C27 !important');
            // navbar.style.backgroundColor = "#111C27" !important;
            console.log(navbar.style.backgroundColor);
        } else {
            navbar.setAttribute('style', 'background-color:transparent !important');
        }
        // navbar.classList.remove("sticky-transparent");
        });
    //   const myAnalyticsLibrary = await import('my-big-analytics-library')
      // do something with myAnalyticsLibrary
    })
})