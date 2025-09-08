import { validateForm } from "./modules/formValidator.js";
import { getDetails, saveDetails } from "./modules/profileManager.js";

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

    fname.value = profileDetails.fname;
    lname.value = profileDetails.lname;
    email.value = profileDetails.email;
    bio.value = profileDetails.bio;
    
    if (charCount) {
        charCount.textContent = bio.value.length;
    }

    if (bio && charCount) {
        bio.addEventListener('input', () => {
            charCount.textContent = bio.value.length;
        });
    }

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
        alert.innerHTML = "Profile updated successfully! Redirecting to profile page...";
        alert.classList.remove("error");
        alert.classList.add("success");
        alert.classList.add("visible");
        
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 2000);
    });
});