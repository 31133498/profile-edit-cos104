export const validateForm = (formData) => {
    if (!formData.email.includes("@")) {
        return {
            success: false,
            message: "Email must contain '@' symbol"
        };
    }
    
    if (!formData.email.includes(".")) {
        return {
            success: false,
            message: "Email must contain '.' symbol before the domain"
        }
    }
    
    if (formData.bio.length > 200) {
        return {
            success: false,
            message: "Bio should not be more than 200 characters."
        }
    }
    
    if (!formData.fname.trim() || !formData.lname.trim() || !formData.email.trim() || !formData.bio.trim()) {
        return {
            success: false,
            message: "All fields are required"
        }
    }

    return { success: true }
}