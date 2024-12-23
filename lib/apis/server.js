import { api } from "../api";

export const loginUser = async (loginData) => {
  console.log(loginData);
  const response = await fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    body: JSON.stringify({
      email: loginData?.email,
      password: loginData?.password,
    }),
  });
  console.log("LOGIN Action", response.json());
};

export const getMovies = async () => {
  try {
    // take api from api file (easy using ky instance no need jaa script apend)
    const response = await api.get("movies", { cache: "no-store" });

    if (response.ok) {
      return response.json();
    } else {
      return { error: true, message: "Somthing went wrong..!" };
    }
  } catch (error) {
    //error handle in ky (handle http errors specifically)
    if (error) {
      const status = error?.response?.status; // HTTP status code (e.g., 404, 500)
      const responseBody = await error?.response?.json(); // parse the response body if possible

      console.log("HTTP Error:", status, responseBody);
    } else {
      //Handle non-HTTP errors (e.g., network issue)
      console.log("Unknown eroor: ", error);
    }
    return undefined;
  }
};
