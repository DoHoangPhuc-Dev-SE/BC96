import React from "react";

export default function Product({name,price}) {
// export default function Product(props) {
//   console.log("👉 props", props);


//   let {name,price} = props
//   const name = props.name;
//   const price = props.price;
  return (
    <div className="col-4">
      <h3>{name}</h3>
      <p>{price} VND</p>
    </div>
  );
}