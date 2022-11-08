import "./App.css";
import React from "react";

function App() {
  const product = {
    name: "Smartphone",
    description:
      "Get in touch with the future, enjoy expirience with the new smartphone.",
    price: "100$",
    amount: 10,
  };

  //Functional component

  function ProductCard(props) {
    return (
      <div className="product-card">
        <h1>{props.name || "No name"}</h1>
        <p>{props.description || "No description available"}</p>
        <p className="price">{props.price || "unknown price"}</p>
        <p className={props.amount > 0 ? "available" : "not-available"}>
          {props.amount > 0 ? "Available" : "Not available"}
        </p>
      </div>
    );
  }

  //Class component

  // class ProductCard extends React.Component {
  //   render() {
  //     const { name, description, price, amount } = this.props;
  //     return (
  //       <div className="product-card">
  //         <h1>{name || "No name"}</h1>
  //         <p>{description || "No description available"}</p>
  //         <p className="price">{price || "unknown price"}</p>
  //         <p className={amount > 0 ? "available" : "not-available"}>
  //           {amount > 0 ? "Available" : "Not available"}
  //         </p>
  //       </div>
  //     );
  //   }
  // }

  return (
    <div className="App">
      <ProductCard
        name={product.name}
        description={product.description}
        price={product.price}
        amount={product.amount}
      />
    </div>
  );
}

export default App;
