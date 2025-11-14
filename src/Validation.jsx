export function validateUsername(username) {
  if (!username?.trim()) return "Username is required";
  const pattern = /^[A-Za-z][A-Za-z]$/;
  if (!pattern.test(username)) 
    return "Username must start with a letter and contain only letters, numbers, or _ (3-15 chars)";
  
  return "";
}


export function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email?.trim()) return "Email is required";
  if (!pattern.test(email)) return "Invalid email";
  return "";
}

export function validatePassword(password) {
  if (!password?.trim()) return "Password is required";
  if (password.length < 6) return "Password must be at least 6 characters";
  return "";
}

export function validateMobile(mobile) {
  const pattern = /^[0-9]{10}$/;
  if (!mobile?.trim()) return "Mobile number is required";
  if (!pattern.test(mobile)) return "Invalid mobile number (must be 10 digits)";
  return "";
}

export function validateDOB(dob) {
  if (!dob?.trim()) return "Date of Birth is required";
  const birthDate = new Date(dob);
  const today = new Date();
  if (birthDate >= today) return "Invalid Date of Birth";
  return "";
}




export function validateDegree(degree) {
  if (!degree?.trim()) return "Degree is required";
  return "";
}

export function validateSpecialization(spec) {
  if (!spec?.trim()) return "Specialization is required";
  return "";
}

export function validateCGPA(cgpa) {
  if (!cgpa?.trim()) return "CGPA is required";
  const num = parseFloat(cgpa);
  if (isNaN(num) || num < 0 || num > 10) return "CGPA must be between 0 and 10";
  return "";
}



export function validateSkills(skills) {

  if (!skills || (Array.isArray(skills) && skills.length === 0)) 
    return "Please select at least one skill";
  return "";
}

export function validateResume(resume) {
  if (!resume) return "Please upload your resume";
  const allowedTypes = ["application/pdf"];
  if (!allowedTypes.includes(resume.type)) 
    return "Resume must be a PDF file";
  return "";
}
