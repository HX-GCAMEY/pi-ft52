export const validateSignup = (signupValues: {
  mail: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
}) => {
  let errors = {};
  if (!signupValues.mail) {
    errors = {...errors, mail: "Email is required"};
  }
  if (!signupValues.password) {
    errors = {...errors, password: "Password is required"};
  }
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(signupValues.mail)) {
    errors = {...errors, mail: "Email is invalid"};
  }
  if (signupValues.password.length < 6) {
    errors = {...errors, password: "Password must be at least 6 characters"};
  }
  if (!/[a-z]/.test(signupValues.password)) {
    errors = {
      ...errors,
      password: "Password must contain at least one lowercase letter",
    };
  }
  if (!/\d/.test(signupValues.password)) {
    errors = {...errors, password: "Password must contain at least one number"};
  }

  if (!signupValues.first_name) {
    errors = {...errors, first_name: "First name is required"};
  }
  if (!signupValues.last_name) {
    errors = {...errors, last_name: "Last name is required"};
  }
  if (!signupValues.phone) {
    errors = {...errors, phone: "Phone number is required"};
  }
  if (!signupValues.address) {
    errors = {...errors, address: "Adress is required"};
  }

  if (!/^\d+$/.test(signupValues.phone)) {
    errors = {...errors, phone: "Phone number must contain only numbers"};
  }

  return errors; //{}
};

export const validateSignin = (signinValues: {
  mail: string;
  password: string;
}) => {
  let errors = {};
  if (!signinValues.mail) {
    errors = {...errors, mail: "Email is required"};
  }
  if (!signinValues.password) {
    errors = {...errors, password: "Password is required"};
  }
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(signinValues.mail)) {
    errors = {...errors, mail: "Email is invalid"};
  }
  if (signinValues.password.length < 6) {
    errors = {...errors, password: "Password must be at least 6 characters"};
  }
  if (!/[a-z]/.test(signinValues.password)) {
    errors = {
      ...errors,
      password: "Password must contain at least one lowercase letter",
    };
  }
  if (!/\d/.test(signinValues.password)) {
    errors = {...errors, password: "Password must contain at least one number"};
  }

  return errors;
};
