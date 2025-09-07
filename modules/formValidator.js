export const validateForm = (formData) => {
    // Check if email contains @ symbol
    if (!formData.email.includes("@")) {
        return {
            success: false,
            message: "Email must contain '@' symbol"
        };
    }
    
    // Check if email contains . symbol
    if (!formData.email.includes(".")) {
        return {
            success: false,
            message: "Email must contain '.' symbol before the domain"
        }
    }
    
    // Check if bio exceeds 200 characters
    if (formData.bio.length > 200) {
        return {
            success: false,
            message: "Bio should not be more than 200 characters."
        }
    }
    
    // Check if required fields are not empty
    if (!formData.fname.trim() || !formData.lname.trim() || !formData.email.trim() || !formData.bio.trim()) {
        return {
            success: false,
            message: "All fields are required"
        }
    }

    return { success: true }
}