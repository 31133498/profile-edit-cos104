import { validateForm } from "./modules/formValidator.js";
import { getDetails, saveDetails } from "./modules/profileManager.js";

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const profileDetails = getDetails();

    const profileForm = document.getElementById("profile-form");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const bio = document.getElementById("bio");
    const alert = document.getElementById("alert");
    const submit = document.getElementById("submit");
    const charCount = document.getElementById("char-count");

    // Pre-fill form with existing data
    fname.value = profileDetails.fname;
    lname.value = profileDetails.lname;
    email.value = profileDetails.email;
    bio.value = profileDetails.bio;
    
    // Update character count on page load
    if (charCount) {
        charCount.textContent = bio.value.length;
    }

    // Real-time character count for bio
    if (bio && charCount) {
        bio.addEventListener('input', () => {
            charCount.textContent = bio.value.length;
        });
    }

    // Handle form submission
    profileForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            fname: formData.get("fname"),
            lname: formData.get("lname"),
            email: formData.get("email"),
            bio: formData.get("bio")
        }
        
        const validatedForm = validateForm(data);

        if (!validatedForm.success) {
            alert.innerHTML = validatedForm.message;
            alert.classList.remove("success");
            alert.classList.add("error");
            alert.classList.add("visible");
            return;
        }
     
        saveDetails(data);
        alert.innerHTML = "Profile updated successfully!";
        alert.classList.remove("error");
        alert.classList.add("success");
        alert.classList.add("visible");
        
        // Auto-hide success message after 3 seconds
        setTimeout(() => {
            alert.classList.remove("visible");
        }, 3000);
    });
});