import { useState, useEffect } from "react";
import "./ToyList.css";
import ShoppingCart from "./ShoppingCart";

export default function ToyList() {
  const emptyCartIcon = (
    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
  );
  const cartItems = (
    <i className="fas fa-cart-arrow-down red" aria-hidden="true"></i>
  );
  //states
  const [toys, setToys] = useState([]);
  const [count, setCount] = useState(0);
  const [cartIcon, setCartIcon] = useState(emptyCartIcon);

  const handleClick = (id) => {
    setToys(toys.filter((toy) => id !== toy.id));
  };

  useEffect(() => {
    fetch("http://localhost:3000/toys")
      .then((res) => res.json())
      .then((json) => setToys(json));
  }, []);

  return (
    <>
      <ShoppingCart itemNums={count} icon={cartIcon} />
      <div className="toyList">
        {toys.map((each) => {
          return (
            <div className="card" key={each.id}>
              <h1>{each.name}</h1>
              <img src={each.image} alt={each.name}></img>
              <button
                onClick={() => {
                  handleClick(each.id);
                  setCount(count + 1);
                  setCartIcon(cartItems);
                }}
              >
                Buy Me!
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
