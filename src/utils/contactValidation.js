
export const nameValidation = {
  required: "Name is required",
  minLength: {
    value: 2,
    message: "Name must be at least 2 characters",
  },
};

export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  },
};

export const messageValidation = {
  required: "Message is required",
  minLength: {
    value: 10,
    message: "Message must be at least 10 characters",
  },
  maxLength: {
    value: 1000,
    message: "Message is too long",
  },
};