import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";

function MyButton() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

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

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

function CountButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>Click me! Number of clicks: {count}</button>
  );
}

function CountApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <CountButton />
      <CountButton />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <MyApp />
    <Profile />
    <ShoppingList />
    <CountApp />
  </StrictMode>
);
