import {ILogin, IRegisterUser} from "@/interfaces/Interfaces";

export const postSignup = async (user: IRegisterUser) => {
  const response = await fetch("http://localhost:5000/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const postSignin = async (credentials: ILogin) => {
  const response = await fetch("http://localhost:5000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  return data;
};
