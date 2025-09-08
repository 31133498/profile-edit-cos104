import { getDetails } from "./modules/profileManager.js";

document.addEventListener('DOMContentLoaded', () => {
    const profileDetails = getDetails();
    
    document.getElementById('profile-fname').textContent = profileDetails.fname;
    document.getElementById('profile-lname').textContent = profileDetails.lname;
    document.getElementById('profile-email').textContent = profileDetails.email;
    document.getElementById('profile-bio').textContent = profileDetails.bio;
});
