
  // Wait for the DOM content to load
  document.addEventListener("DOMContentLoaded", function () {
    // Select all the <li> elements in the description list
    const liElements = document.querySelectorAll(".description-list li");

    // Loop through each <li> element
    liElements.forEach((li) => {
      // Create a <span> element for the bullet point
      const bulletPoint = document.createElement("span");
      bulletPoint.textContent = "\202"; // Set the bullet point character
      bulletPoint.classList.add("bullet-point");

      // Calculate the left position of the bullet point based on the width of the text
      const textWidth = li.clientWidth;
      bulletPoint.style.left = `${-textWidth - 15}px`; // Adjust the -15 value for the desired spacing

      // Add the bullet point to the <li> element
      li.prepend(bulletPoint);
    });
  });