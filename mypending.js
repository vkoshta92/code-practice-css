
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







// all pages