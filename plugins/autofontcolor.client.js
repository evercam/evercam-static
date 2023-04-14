// const getImageBrightness = (imageSrc, callback) => {
//     var img = document.createElement("img");
//     img.src = imageSrc;
//     img.style.display = "none";
//     document.body.appendChild(img);

//     var colorSum = 0;

//     img.onload = function () {
//         // create canvas
//         var canvas = document.createElement("canvas");
//         canvas.width = this.width;
//         canvas.height = this.height;

//         var ctx = canvas.getContext("2d");
//         ctx.drawImage(this, 0, 0);

//         var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//         var data = imageData.data;
//         var r, g, b, avg;

//         for (var x = 0, len = data.length; x < len; x += 4) {
//             r = data[x];
//             g = data[x + 1];
//             b = data[x + 2];

//             avg = Math.floor((r + g + b) / 3);
//             colorSum += avg;
//         }

//         var brightness = Math.floor(colorSum / (this.width * this.height));
//         callback(brightness);
//     }
// }


// export default defineNuxtPlugin((nuxtApp) => {
//     onNuxtReady(async () => {
//         nuxtApp.vueApp.use(getImageBrightness)
//     })
//   })

export default defineNuxtPlugin(() => {
    onNuxtReady(async () => {
        // const navbar = document.getElementById("header-transparent");
        // window.addEventListener("scroll", function () {
        //     if (window.scrollY >= 300) {
        //         navbar.setAttribute('style', 'background-color:#111C27 !important');
        //     } else {
        //         navbar.setAttribute('style', 'background-color:transparent !important');
        //     }
        // });

        const img = document.getElementsByClassName("h1-heading");
        console.log("This is the image that calculated", img)

        const getImageBrightness = (imgSrc, callback) => {
            var img = document.createElement("img");
            // img.src = document.getElementsByClassName("h1-heading");
            img.src = imgSrc;
            img.style.display = "none";
            document.body.appendChild(img);
        
            var colorSum = 0;
        
            img.onload = function () {
                // create canvas
                var canvas = document.createElement("canvas");
                canvas.width = this.width;
                canvas.height = this.height;
        
                var ctx = canvas.getContext("2d");
                ctx.drawImage(this, 0, 0);
        
                var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                var data = imageData.data;
                var r, g, b, avg;
        
                for (var x = 0, len = data.length; x < len; x += 4) {
                    r = data[x];
                    g = data[x + 1];
                    b = data[x + 2];
        
                    avg = Math.floor((r + g + b) / 3);
                    colorSum += avg;
                }
        
                var brightness = Math.floor(colorSum / (this.width * this.height));
                callback(brightness);
            }
        }

        console.log(getImageBrightness())
    })
})