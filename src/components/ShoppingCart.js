export default function ShoppingCart(props) {
  const sale = () => {
    if (props.itemNums >= 8) {
      return (
        <h1>
          <i className="far fa-frown" aria-hidden="true"></i>We are sold out!
        </h1>
      );
    } else {
      return (
        <h1>
          {props.icon}Cart ({props.itemNums}{" "}
          {props.itemNums >= 2 ? "Items" : "Item"})
        </h1>
      );
    }
  };
  return <div className="cart">{sale()}</div>;
}
