
// fancybox
// https://stackblitz.com/edit/js-x7cx7w?file=index.html,index.js,style.css
{/* <script>
Fancybox.bind('[data-fancybox="galleryone"]', {
Slideshow: {
 playOnStart: true,
},
}); 

Fancybox.bind('[data-fancybox="gallerytwo"]', {
Slideshow: {
 playOnStart: true,
},
}); 
Fancybox.bind('[data-fancybox="gallerythree"]', {
Slideshow: {
 playOnStart: true,
},
}); 
Fancybox.bind('[data-fancybox="galleryfour"]', {
Slideshow: {
 playOnStart: true,
},
}); 

</script> */}









// load more html
// <section class="button-position-casestudies">
// <div class="container">
//     <div class="row box-list pm-0" id="image-container">
//         <!-- Images will be dynamically added here -->
        
//         <!-- Repeat this structure for each initial image -->


        
//     </div>
//     <div class="text-center">
//         <button id="load-more-btn" class="btn btn-primary" style=" background-color: #000;
//         width: 15.4rem;
//         display: flex;
//         justify-content: center;
//         border-radius: 5px;
//         padding: 10px 20px;;
//         transition: .5s; color: white; margin: auto;  margin-top: 40px;">Load More</button>
//     </div>
// </div>
// </section>



// add in script
// document.addEventListener("DOMContentLoaded", function() {
//     // Array containing all image sources
//     const imageSources = [
//         "assets/images/casestudy/gallery/1.svg",
//         "assets/images/casestudy/gallery/2.svg",
//         "assets/images/casestudy/gallery/1.svg",
//         "assets/images/casestudy/gallery/2.svg",
//         "assets/images/casestudy/gallery/1.svg",
//         "assets/images/casestudy/gallery/2.svg",
//         "assets/images/casestudy/gallery/1.svg",
//         "assets/images/casestudy/gallery/2.svg",
//         "assets/images/casestudy/gallery/1.svg",
//         "assets/images/casestudy/gallery/2.svg",
//         "assets/images/casestudy/gallery/1.svg",
//         "assets/images/casestudy/gallery/2.svg",
//         "assets/images/casestudy/gallery/1.svg",
//         "assets/images/casestudy/gallery/2.svg",
//         "assets/images/casestudy/gallery/1.svg",
//         "assets/images/casestudy/gallery/2.svg",
//         "assets/images/casestudy/gallery/1.svg",
//         "assets/images/casestudy/gallery/2.svg",
//         "assets/images/casestudy/gallery/1.svg",
//         "assets/images/casestudy/gallery/2.svg",
//         "assets/images/casestudy/gallery/1.svg",
//         "assets/images/casestudy/gallery/2.svg",
//     ];


      

//         let container = document.getElementById("image-container");
//     const loadMoreBtn = document.getElementById("load-more-btn");
//     const imagesPerLoad = 8; // Number of images to load per click
//     let currentImageIndex = 0; // Index to keep track of loaded images

//     // Function to show loader
//     function showLoader() {
//         const loader = document.createElement("div");
//         loader.classList.add("loader");
//         container.appendChild(loader);
//     }

//     // Function to hide loader
//     function hideLoader() {
//         const loader = document.querySelector(".loader");
//         if (loader) {
//             loader.remove();
//         }
//     }

//     // Function to load more images
//     function loadMoreImages() {
//         showLoader(); // Show loader while images are loading

//         const endIndex = Math.min(currentImageIndex + imagesPerLoad, imageSources.length);
//         for (let i = currentImageIndex; i < endIndex; i++) {
//             container.innerHTML += `
//                 <div class="col-lg-4 col-md-2 col_my marginequal_new mix one" fade="fade-right">
//                     <div>
//                         <a data-fancybox="gallery" data-src="${imageSources[i]}">
//                             <img src="${imageSources[i]}" alt="SLOTS CHARACTERS" title="SLOTS CHARACTERS">
//                         </a>
//                     </div>
//                 </div>
//             `;
//         }
//         currentImageIndex = endIndex;
//         hideLoader(); // Hide loader once images are loaded

//         // Hide the load more button if all images are loaded
//         if (currentImageIndex >= imageSources.length) {
//             loadMoreBtn.style.display = "none";
//         }
//     }

//     // Load initial set of images
//     loadMoreImages();

//     // Event listener for the load more button
//     loadMoreBtn.addEventListener("click", loadMoreImages);
// });


























// .....................................................

// loadSection.js
// document.addEventListener("DOMContentLoaded", function() {
//     fetch("monkey_new.html")
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById("monkey_new").innerHTML = data;
//     });
// });


// all pages
{/* <script src="./loadSection.js"></script>
    <div id="monkey_new"></div> */}





// // monkey_new.html
// <section class="container_new" id="section-container">
//     <div class="content_new">
//       <h2>Left Side Heading</h2>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//       <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//       <div class="buttons_new">
//         <button>Button 1</button>
//         <button>Button 2</button>
//       </div>
//     </div>
//     <div class="image_new">
//       <img src="../src/assets/images/about/zeus_character.webp" alt="Your Image">
//     </div>
//   </section>

//   <style>
    
// .container_new {
  
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10rem 20rem;
//   background-color:skyblue;
// }

// .content_new {
//   width: 50%; 
// }

// h2 {
//   font-size: 24px;
// }

// p {
//   margin-bottom: 10px;
// }

// .buttons_new {
//   margin-top: 20px;
// }

// button {
//   padding: 10px 20px;
//   margin-right: 10px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// }

// .image_new {
//   position: relative;
//   width: 50%; 
// }

// .image_new img {
//   position: absolute;
//   top: -31rem;
//   right: -50px; 
//   height: auto;
// }




// @media (max-width: 767px) {
//   .content_new {
//       width: 100%; 
//       height: 50%;
//     }
//     .container_new {

//     flex-direction: column;
//     padding: 5rem 5rem;
//     gap: 20px;
//     }

//     .image_new {
//       position: relative;
//       width: 100%; 
//       height: 50%;
//     }

//     .image_new img {
//       position: static;
     
     
//     }

// }
//   







// all phone

/*  slider phone*/
/* phone */




// .slider {
//     margin-bottom: 30px;
//     position: relative;
//   }
//   .slider .owl-item.active.center .slider-card {
//       transform: scale(1.15);
//     opacity: 1;
    
//     /* background: -webkit-linear-gradient(to bottom, #ff5e62, #ff9966);
//     background: linear-gradient(to bottom, #ff5e62, #ff9966); */
//     color: #fff;
//     box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3), 0 0 0 2px #fff; 
    
//   }
  
  
  
//     .owl-item.active.center {
//       position: relative;
//     }
//     .mirror-image {
//       border-radius: 10px;
//       position: absolute;
//       bottom: -106%; /* Adjust the value to control the height of the reflection */
//       left: 0;
//       width: 40%;
//       height: 100%;
//       transform: scaleY(-1);
//       opacity: 0.3; /* Adjust the base opacity of the reflection */
//       background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8)); /* Adjust the gradient stops and colors */
//       pointer-events: none; /* Allow interactions with the content beneath */
//       display: none; /* Initially hide the mirror image */
//       visibility: hidden;
  
//     }
  
  
//     .slider .owl-item.active.center .slider-card .mirror-image {
//       visibility: initial;
//     }
  
  
  
  
//   @media (max-width:992px) {
//   .slider .owl-item.active.center .slider-card {
//   margin-inline: auto;
//   }
  
  
//   }
  
  
  
  
  
  
//   @media (max-width:1500) {
//       .slider-card {
//       background: #fff;
//       padding: 0px 0px;
//       /* margin: 50px 15px 20px 50px; */
//       border-radius: 12px;
//       box-shadow: 0 15px 45px -20px rgb(0 0 0 / 73%);
//       transform: scale(0.2);
//       opacity: 1;
//       transition: all 0.3s;
//       height:430px;
//       width: 250px;
//       border: 9px solid white;
//     }
  
//       }
  
  
  
  
//   .slider-card img {
//     width: 100%;
//     height: 100%;
//     object-fit:cover; /* Ensure the image covers the entire container while maintaining aspect ratio */
//     /* box-shadow: 0 10px 20px rgba(184, 160, 160, 0.7), 0 0 0 2px #fff;  */
//     border-radius: 10px;
//   }
  
  
  
//   .owl-nav .owl-prev {
//     position: absolute;
//     top: calc(50% - 25px);
//     left: 0;
//     opacity: 1;
//     font-size: 30px !important;
//     z-index: 99999;
   
//   }
//   .owl-nav .owl-next {
  
      
//     position: absolute;
//     top: calc(50% - 25px);
//     right: 0;
//     opacity: 1;
//     font-size: 30px !important;
//     z-index: 9999;
    
    
//   }
  
//   .pos .owl-nav .owl-prev{
//       position: absolute;
//       top: calc(50% - 25px);
//       right: 0;
//       opacity: 1;
//       font-size: 30px !important;
//       z-index: 9999;
      
//   }
  
  
  
  
//   .pos .owl-nav .owl-next {
  
//       position: absolute;
//       top: calc(50% - 25px);
//       left: 7rem;
//       opacity: 1;
//       font-size: 30px !important;
//       z-index: 99999;
     
//     }
     
      
      
    
  
  
//   .owl-dots {
//     text-align: center;
//   }
//   .owl-dots .owl-dot {
//     height: 10px;
//     width: 10px;
//     border-radius: 10px;
//     background: #ccc !important;
//     margin-left: 3px;
//     margin-right: 3px;
//     outline: none;
//     /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 0 0 2px #fff;  */
//   }
//   .owl-dots .owl-dot.active {
//     background: transparent !important;
//   }
  
  
  
  
  
   
  
//   @media (max-width:992px) {
  
//       .projects-slides-two.owl-theme .owl-nav [class*=owl-] {
//           margin: 29px 10px;
//           padding: 0;
//           background: 0 0;
//           color: #000;
//           border: 2px solid #000;
//           border-radius: 50%;
//           -webkit-transition: var(--transition);
//           transition: var(--transition);
//           display: inline-block;
//           width: 55px;
//           height: 55px;
//           line-height: 55px;
//           text-align: center;
//           font-size: 3.5rem;
//       }
     
//       }
  
  
//   /*  */
//   /* Add this CSS to style the navigation buttons */
//   .owl-carousel-1 .owl-nav {
//       position: absolute;
//       bottom: 50px; 
//       width: 28rem;
//       left: 33%;
//   }
//   @media (max-width:700px){
//       .owl-carousel-1 .owl-nav {
         
        
          
//           left: 13%;
//       }
//   }
//   @media (max-width:445){
//       .owl-carousel-1 .owl-nav {
         
        
          
//           left: 8%;
//       }
//   }
  
//   .owl-carousel-1 .owl-nav button {
//       background: #fff;
//       color: #333;
//       padding: 10px;
//       border: none;
//       cursor: pointer;
//       font-size: 20px;
//       transition: background 0.3s, color 0.3s;
//   }
//   .owl-carousel-1 .owl-nav .owl-prev::after {
//     content: "PICTURE PUZZLE";
//     position: absolute;
//     left: 60px;
//     top: 13%;
//     font-size: 20px;
//     white-space: nowrap;
//     font-weight: 700;
//     z-index: 999999;
  
  
//   }
  
  
//   .owl-carousel-1 .owl-nav .owl-prev {
//       position: absolute;
//       top: calc(50% - 25px);
//       left: 0;
//       opacity: 1;
//       font-size: 30px !important;
//       z-index: 99999;
     
//     }
//     .owl-carousel-1 .owl-nav .owl-next {
//       position: absolute;
//       top: calc(50% - 25px);
//       right: 0;
//       opacity: 1;
//       font-size: 30px !important;
//       z-index: 9999;
      
      
//     }
  
  
  
//   .owl-carousel-1 .owl-nav button i:hover {
//       /* background: #333; */
//       color: skyblue;
//       border: 2px solid skyblue;
  
//   }
  
//   /* Add this CSS to style the navigation icons */
//   .owl-carousel-1 .owl-nav button i {
//       font-size: 30px !important;
//       border: 2px solid black;
      
//       border-radius: 50%;
//       padding: 6px 14px;
//       position: relative;
//       top:40px;
//       z-index: 12;
  
      
      
//   }
//   .slider-card {
//       background: #fff;
  
//       padding: 0px 0px;
//       margin: 50px 15px 90px 15px;
//       /* border-radius: 12px; */
//       /* box-shadow: 0 15px 45px -20px rgb(0 0 0 / 73%); */
//       transform: scale(0.9);
//       opacity: 0.5;
//       transition: all 0.3s;
//       height:430px;
//       width: 250px;
//       /* border: 9px solid transparent; */
      
//     }
    
  
//   .my_height{
//       background-color: green;
//       height: 100vh;
//       z-index: -1;
      
//   }
  
  
  
//   /* phone */
//   .static-frame {
//       position: relative;
//       overflow: hidden;
//   }
  
//   .static-frame-overlay {
//       position: absolute;
//       top: -3%;
//       left: 30.5%;
//       transform: translate(-50%, -50%);
//       border: 9px solid white !important;
//       /* background-color: red; */
//       box-sizing: border-box;
//       z-index: 1;
//       height:430px;
//     width: 250px;
//     border-radius: 12px;
//     box-shadow: 0 15px 45px -20px rgb(0 0 0 / 73%);
//     transform: scale(0.9);
//     /* opacity: 0.5; */
//     transition: all 0.3s;
//     height:590px;
//     width: 340px;
//     border: 9px solid white;
//     z-index: 2;
//   }
  
//   @media(max-width:600px){
      
//   .static-frame-overlay {
  
//       top: -3%;
//       left: -5%;
  
  
//   }
//     }
  
//   .owl-carousel {
//       z-index: 1;
//   }
  
//   /*  slider phone*/
//   /* phone */



// phone html

// <div class="col-lg-6_new col-md-12 p-0 over_hidden  my_height    ">
// <div class="dovelopment">
  
//       <section id="slider" class="pt-5">
//         <div class="container">
       
//           <div class="slider static-frame ">
//               <div class="owl-carousel owl-carousel-1 ">
//                   <div class="slider-card">
//                       <div class="d-flex justify-content-center align-items-center mb-4 ">
//                           <img src="assets/images/home-page/phone/1.png" alt="" >
//                           <!-- <img class="mirror-image" src="assets/images/home-page/phone/1.png" alt="" > -->

//                       </div>
//                   </div>
//                   <div class="slider-card">
//                       <div class="d-flex justify-content-center align-items-center mb-4">
//                           <img src="assets/images/home-page/phone/2.png" alt="">
//                           <!-- <img class="mirror-image" src="assets/images/home-page/phone/2.png" alt="" > -->

                          

//                       </div>
//                   </div>
//                   <div class="slider-card">
//                       <div class="d-flex justify-content-center align-items-center mb-4">
//                           <img src="assets/images/home-page/phone/3.png" alt="">
//                           <!-- <img class="mirror-image" src="assets/images/home-page/phone/3.png" alt="" > -->
                          
//                       </div>
//                   </div>
                 
                 
    
//                   <div class="slider-card">
//                     <div class="d-flex justify-content-center align-items-center mb-4">
//                         <img src="assets/images/home-page/phone/1.png" alt="">
//                         <!-- <img class="mirror-image" src="assets/images/home-page/phone/1.png" alt="" > -->

//                     </div>
//                 </div>
                
//                   <!-- <div class="slider-card">
//                       <div class="d-flex justify-content-center align-items-center mb-4">
//                           <img src="images/slide-4.jpg" alt="">
//                       </div>
//                   </div> -->
//                   <!-- <div class="slider-card">
//                       <div class="d-flex justify-content-center align-items-center mb-4">
//                           <img src="images/slide-5.jpg" alt="">
//                       </div>
//                   </div> -->
//               </div>
//               <div class="static-frame-overlay"></div>
//           </div>

          


//         </div>
//       </section>




// </div>
// </div>