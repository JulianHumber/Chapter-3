document.addEventListener("DOMContentLoaded", () => {

    // Form Validation
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            // Replace 'inputFieldId' with the actual ID of the input to validate
            const input = document.getElementById("inputFieldId"); 
            if (input) {
                const error = input.nextElementSibling;
                
                // Display error message if input is empty, hide if not
                if (input.value.trim()) {
                    error.style.display = "none";
                } else {
                    error.style.display = "block";
                }
            }
        });
    }
    
    // Image Modal Gallery
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeModalBtn = document.getElementById("closeModal");
    const images = document.querySelectorAll(".gallery img");

    if (modal && modalImg && closeModalBtn) {
        // Display the modal when an image is clicked
        images.forEach(image => {
            image.addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = image.src;
            });
        });

        // Close the modal when the close button is clicked
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Close the modal when clicking outside the image
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    
    // Toggle Project Details
    document.querySelectorAll(".project-toggle").forEach(button => { 
        button.addEventListener("click", () => {
            // Find the associated project details
            const details = button.nextElementSibling;
            
            // Toggle visibility of the project details
            if (details.style.display === "none" || !details.style.display) {
                details.style.display = "block";
                button.textContent = "Hide Details";
            } else {
                details.style.display = "none";
                button.textContent = "Show Details";
            }
        });
    });
});


