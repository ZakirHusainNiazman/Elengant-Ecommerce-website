export function isValidText(value) {
    return value.trim() !== "" && value.length >=3;
}

export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const isValidPhoneNumber = (phone) => {
  const phoneRegex = /^[+]?[0-9]{10,15}$/;
  return phoneRegex.test(phone);
};

export const isValidSelectedOption = (label,option) => {
  return option !== label;
};

