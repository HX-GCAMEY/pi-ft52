import {ILogin, IRegisterUser} from "@/interfaces/Interfaces";

export const postSignup = async (user: IRegisterUser) => {
  const response = await fetch("https://pi-ft52.onrender.com/users/register", {
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
  const response = await fetch("https://pi-ft52.onrender.com/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  return data;
};
