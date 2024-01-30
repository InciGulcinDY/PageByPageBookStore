import React, { useState } from "react";

type Props = {};

const CartItemCard = (props: Props) => {

    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
    };
  
    const decrementQuantity = () => {
      if (quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1);
      }
    };

  return (
    <div className="card mb-3" style={{ width: 700 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="/assets/ahmed-almakhzanji-kshkB1i5_5o-unsplash.jpg"
            className="img-fluid rounded-start"
            alt="product image"
          />
        </div>
        <div className="col-md-3 my-auto">
          <div className="card-body">
            <h5 className="card-title">Book Title</h5>
            <p className="card-text">
              <small className="text-body-secondary">
                Author Name
              </small>
            </p>
          </div>
        </div>
        <div className="col-md-3 my-auto">
          <div className="card-body">
           
          <div>
        
        <button className="btn btn-light text-primary " onClick={decrementQuantity}>-</button>
        <span className="mx-1">{quantity}</span>
        <button className="btn btn-light text-primary " onClick={incrementQuantity}>+</button>
      </div>
    
          </div>
        </div>
        <div className="col-md-2 my-auto">
          <div className="card-body">
            <h5 className="card-text">
             100 tl
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
