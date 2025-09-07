import { getDetails } from "./modules/profileManager.js";

// Load and display profile information
document.addEventListener('DOMContentLoaded', () => {
    const profileDetails = getDetails();
    
    // Update the profile display with loaded data
    document.getElementById('profile-fname').textContent = profileDetails.fname;
    document.getElementById('profile-lname').textContent = profileDetails.lname;
    document.getElementById('profile-email').textContent = profileDetails.email;
    document.getElementById('profile-bio').textContent = profileDetails.bio;
});
