import React from "react";

const Price = ({ salePrice, originalPrice}) => {
  return (
    <div className="book__price">
      {salePrice ? (
        <>
          {" "}
          <span className="book__price--normal">
            R{originalPrice.toFixed(2)}
          </span>
          R{salePrice.toFixed(2)}
        </>
      ) : (
        `R${originalPrice.toFixed(2)}`
      )}
    </div>
  );
};

export default Price;
