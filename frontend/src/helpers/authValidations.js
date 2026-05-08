export const validateLogin = (input) => {
  let error = {};
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (input.name === "user_name") {
    if (typeof input.value !== "string")
      error.user_name = "Username must be a string";
    if (input.value === "") error.user_name = "Username required";
  } else if (input.name === "user_email") {
    if (regex.test(input.value)) error.user_email = "Invalid email";
    if (input.value === "") error.user_email = "email required";
  } else if (input.name === "user_password") {
    if (typeof input.value !== "string")
      error.user_password = "password must be a string";
    if (input.value === "") error.user_password = "password required";
  }

  return error;
};

export const validateRegister = (input) => {
  let error = {};
  if (input.name === "user_name") {
    if (typeof input.value !== "string")
      error.user_name = "Username must be a string";
    if (input.value === "") error.user_name = "Username required";
  } else if (input.name === "user_password") {
    if (typeof input.value !== "string")
      error.user_password = "password must be a string";
    if (input.value === "") error.user_password = "password required";
  }

  return error;
};
