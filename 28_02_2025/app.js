function toggleMenu() {
  const menuicon = document.getElementById("menuIcon");
  const closeicon = document.getElementById("closeIcon");
  const menu = document.getElementsByClassName("mobile_navigation_menu")[0];

  menuicon.classList.toggle("hide");
  menu.classList.toggle("show");

  if (document.body.style.overflow == "hidden") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
}
////////////////////////////////////////////////////////////////////////

var varA = 0;
var varB = 0;
var varC = 0;

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".theMenu__slider");
  const mainItem = document.querySelector("#main_item");
  const prevButton = document.querySelector(".slider_previous_button");
  const nextButton = document.querySelector(".slider_next_button");

  if (slider && mainItem) {
    // Center the main item on load
    const scrollX =
      mainItem.offsetLeft - (slider.offsetWidth / 2 - mainItem.offsetWidth / 2);
    slider.scrollTo({ left: scrollX, behavior: "smooth" });
  }

  // Scroll amount (equal to one slider item width + gap)
  const scrollAmount =
    document.querySelector(".sliderItem")?.offsetWidth + 47 || 300; // Default to 300px

  function updateButtons() {
    // console.log(slider.scrollLeft, slider.offsetWidth, slider.scrollWidth);
    prevButton.disabled = slider.scrollLeft <= 0;
    nextButton.disabled =
      slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 1;

    varA = slider.scrollLeft;
    varB = slider.offsetWidth;
    varC = slider.scrollWidth;
    console.log(varA, varB, varC);

    // if(varA == varA){
    //   prevButton.style.display = "none";
    // }
    // else{
    //   prevButton.style.display = "inline-block";
    // }
  }

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setTimeout(updateButtons, 500);
    });

    nextButton.addEventListener("click", () => {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(updateButtons, 500);
    });

    // Initial button state
    updateButtons();
  }
});

//////////////////////////////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", function () {
//   const slider = document.querySelector(".theMenu__slider");
//   const prevButton = document.querySelector(".slider_previous_button");
//   const nextButton = document.querySelector(".slider_next_button");

//   // Find all slider items
//   const items = document.querySelectorAll(".sliderItem");

//   if (slider && prevButton && nextButton) {
//     // Scroll amount (one slider item width + gap)
//     const scrollAmount = items[0]?.offsetWidth + 47 || 300; // Default to 300px

//     // Function to update button states
//     function updateButtons() {
//       const firstItem = items[0];
//       const lastItem = items[items.length - 1];

//       // Disable next button if already at the last item
//       nextButton.disabled =
//         slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth;

//       // Disable prev button if already at the first item
//       prevButton.disabled = slider.scrollLeft <= 0;

//       // Wrap-around when at the first or last item
//       if (slider.scrollLeft <= 0) {
//         slider.scrollTo({
//           left: slider.scrollWidth - slider.offsetWidth,
//           behavior: "smooth",
//         });
//       } else if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
//         slider.scrollTo({ left: 0, behavior: "smooth" });
//       }
//     }

//     // Scroll right button click
//     nextButton.addEventListener("click", () => {
//       if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
//         slider.scrollTo({ left: 0, behavior: "smooth" }); // Jump to first item
//       } else {
//         slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
//       }
//       setTimeout(updateButtons, 500);
//     });

//     // Scroll left button click
//     prevButton.addEventListener("click", () => {
//       if (slider.scrollLeft <= 0) {
//         slider.scrollTo({
//           left: slider.scrollWidth - slider.offsetWidth,
//           behavior: "smooth",
//         }); // Jump to last item
//       } else {
//         slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//       }
//       setTimeout(updateButtons, 500);
//     });

//     // Initialize button state
//     updateButtons();
//   }
// });
