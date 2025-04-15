// const menuIcon = document.getElementById('menuIcon');
// const firstChild = menuIcon.getElementsByTagName('div')[0]; 
// const middleChild = menuIcon.getElementsByTagName('div')[1];
// const lastChild = menuIcon.getElementsByTagName('div')[2];



// menuIcon.addEventListener('click', function () {
//     menuIcon.classList.toggle('active');
//     middleChild.classList.toggle('letsGo');
//     firstChild.classList.toggle('firstRotate');
//     lastChild.classList.toggle('lastRotate');
//     document.getElementById('nav').classList.toggle('nav-active');
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const slider = document.querySelector(".theMenu__slider");
//   const items = document.querySelectorAll(".sliderItem");
//   const prevButton = document.querySelector(".slider_previous_button");
//   const nextButton = document.querySelector(".slider_next_button");

//   let currentIndex = 2; // Start with the middle item (index 2 - House Dog)

//   // Function to scroll to a specific item
//   function scrollToItem(index) {
//     if (index >= 0 && index < items.length) {
//       items[index].scrollIntoView({
//         behavior: "smooth",
//         block: "nearest",
//         inline: "center",
//       });
//       currentIndex = index;
//     }
//   }

//   // Handle next button click
//   nextButton.addEventListener("click", function () {
//     scrollToItem(currentIndex + 1);
//   });

//   // Handle previous button click
//   prevButton.addEventListener("click", function () {
//     scrollToItem(currentIndex - 1);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // Get slider elements
//   const slider = document.querySelector(".theMenu__slider");
//   const prevButton = document.querySelector(".slider_previous_button");
//   const nextButton = document.querySelector(".slider_next_button");

//   // Calculate single slide width (item width + gap)
//   const slideWidth = 295 + 47; // Width of item + gap

//   // Set initial scroll position to show the main item
//   // This centers the main item initially
//   slider.scrollLeft = (slider.scrollWidth - slider.clientWidth) / 2;

//   // Handle next button click
//   nextButton.addEventListener("click", function () {
//     slider.scrollLeft += slideWidth;
//   });

//   // Handle previous button click
//   prevButton.addEventListener("click", function () {
//     slider.scrollLeft -= slideWidth;
//   });
// });

// window.addEventListener("load", function (e) {
//   var container = document.querySelector(".theMenu__slider");
//   var middle =
//     container.children[Math.floor((container.children.length - 1) / 2)];
//   container.scrollLeft =
//     middle.offsetLeft + middle.offsetWidth / 2 - container.offsetWidth / 2;
// });

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".theMenu__slider");
  const mainItem = document.querySelector("#main_item");

  if (slider && mainItem) {
    const scrollX =
      mainItem.offsetLeft - (slider.offsetWidth / 2 - mainItem.offsetWidth / 2);
    slider.scrollTo({ left: scrollX, behavior: "smooth" });
  }
});


// document.addEventListener("DOMContentLoaded", function () {
//   const slider = document.querySelector(".theMenu__slider");
//   const mainItem = document.querySelector("#main_item");
//   const nextBtn = document.querySelector(".slider_next_button");
//   const prevBtn = document.querySelector(".slider_previous_button");

//   if (!slider || !mainItem || !nextBtn || !prevBtn) return;

//   // Center the main item on load
//   function centerMainItem() {
//     const scrollX =
//       mainItem.offsetLeft - (slider.offsetWidth / 2 - mainItem.offsetWidth / 2);
//     slider.scrollTo({ left: scrollX, behavior: "smooth" });
//   }

//   centerMainItem(); // Run on load

//   // Button Click Events
//   nextBtn.addEventListener("click", function () {
//     slider.scrollBy({ left: 300, behavior: "smooth" }); // Adjust scroll distance
//   });

//   prevBtn.addEventListener("click", function () {
//     slider.scrollBy({ left: -300, behavior: "smooth" });
//   });
// // });

// document.addEventListener("DOMContentLoaded", function () {
//   const slider = document.querySelector(".theMenu__slider");
//   const items = document.querySelectorAll(".sliderItem");
//   const mainItem = document.querySelector("#main_item");
//   const nextBtn = document.querySelector(".slider_next_button");
//   const prevBtn = document.querySelector(".slider_previous_button");

//   if (!slider || !items.length || !nextBtn || !prevBtn) return;

//   // Clone first and last elements for seamless looping
//   const firstClone = items[0].cloneNode(true);
//   const lastClone = items[items.length - 1].cloneNode(true);

//   slider.appendChild(firstClone); // Add clone at the end
//   slider.insertBefore(lastClone, items[0]); // Add clone at the beginning

//   let scrollAmount = 300; // Adjust scroll distance
//   let isScrolling = false;

//   // Center main item initially
//   function centerMainItem() {
//     const scrollX =
//       mainItem.offsetLeft - (slider.offsetWidth / 2 - mainItem.offsetWidth / 2);
//     slider.scrollTo({ left: scrollX, behavior: "instant" });
//   }

//   centerMainItem(); // Run on load

//   // Scroll function
//   function scroll(direction) {
//     if (isScrolling) return;
//     isScrolling = true;

//     let scrollValue = direction === "next" ? scrollAmount : -scrollAmount;
//     slider.scrollBy({ left: scrollValue, behavior: "smooth" });

//     setTimeout(() => {
//       isScrolling = false;
//       let firstRealItem = items[0]; // First real item (not clone)
//       let lastRealItem = items[items.length - 1]; // Last real item

//       if (
//         direction === "next" &&
//         slider.scrollLeft >= lastRealItem.offsetLeft
//       ) {
//         slider.scrollLeft = firstRealItem.offsetLeft; // Jump to first
//       } else if (
//         direction === "prev" &&
//         slider.scrollLeft <= firstRealItem.offsetLeft
//       ) {
//         slider.scrollLeft = lastRealItem.offsetLeft; // Jump to last
//       }
//     }, 500); // Delay for smooth transition
//   }

//   // Button Click Events
//   nextBtn.addEventListener("click", () => scroll("next"));
//   prevBtn.addEventListener("click", () => scroll("prev"));
// });
// document.addEventListener("DOMContentLoaded", function () {
//   const slider = document.querySelector(".theMenu__slider");
//   const items = document.querySelectorAll(".sliderItem");
//   const nextBtn = document.querySelector(".slider_next_button");
//   const prevBtn = document.querySelector(".slider_previous_button");

//   if (!slider || items.length !== 5 || !nextBtn || !prevBtn) return;

//   let currentIndex = 0; // Start at the first item
//   const totalItems = items.length;
//   const itemWidth = items[0].offsetWidth + 47; // Slide width + gap

//   // Function to scroll
//   function scroll(direction) {
//     if (direction === "next") {
//       currentIndex++;
//       if (currentIndex >= totalItems) {
//         slider.style.transition = "none"; // Remove transition for instant jump
//         currentIndex = 0;
//       }
//     } else if (direction === "prev") {
//       currentIndex--;
//       if (currentIndex < 0) {
//         slider.style.transition = "none"; // Remove transition for instant jump
//         currentIndex = totalItems - 1;
//       }
//     }

//     // Smooth scroll after transition reset
//     setTimeout(() => {
//       slider.style.transition = "transform 0.4s ease-in-out";
//       slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
//     }, 10);
//   }

//   // Button Click Events
//   nextBtn.addEventListener("click", () => scroll("next"));
//   prevBtn.addEventListener("click", () => scroll("prev"));
// });
