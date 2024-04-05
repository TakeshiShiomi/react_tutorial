import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function MyButton() {
  return <button>I'm a button</button>;
}

let App = function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
};

const user = {
  name: "Hedy Lamarr",
  imageUrl:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIuzYaSyQlvdZYIywM3P0aOSY_ueSczlm9-HUbUvQiB3QfBLrJHo2wuBnYVhNMeGoSnIfJpMtCxgbUyU7uNxGW1zXl7yH0bppd2MCyGnwcDfvGOUFSxDi98O7lihF4EJn0tjquYxTOXmmU/s1600/online_syoudan_seisen_syokuhin.png",
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <Profile />
  </StrictMode>
);
