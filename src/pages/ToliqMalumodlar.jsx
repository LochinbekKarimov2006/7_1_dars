import React, { useContext } from "react";
import { MyContext } from "../context/GlobalContext";

function ToliqMalumodlar() {
  const { value, setValue } = useContext(MyContext);
  console.log(value);

  const handleAddToBag = () => {
    // Add your logic here to add the item to the cart or handle the action
    console.log("Added to bag:", value);
  };

  return (
    <div className="max-w-[1100px] mx-auto my-[60px] toliq">
      <div>
        <img
          className="w-[80%] mx-auto rounded-[10px]"
          src={value.image}
          alt="Product"
        />
      </div>
      <div>
        <h4 className="text-xl text-neutral-content font-bold mt-2">Modenza</h4>
        <h1 className="capitalize text-3xl font-bold">{value.title}</h1>
        <p className="font-[500]">${value.price}</p>
        <p className="mt-6 leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque illum
          fuga veniam dolorem alias voluptates sed voluptatem. Ratione,
          officiis! Magni optio et perspiciatis? Obcaecati ipsum tempore quas
          corporis ut. Aliquam.
        </p>
        <div>
          <h4 className="text-md font-[600] tracking-wider capitalize">
            Colors
          </h4>
          <div className="flex gap-2">
          {value?.colors?.map((e, index) => (
    <button 
        key={index}
        style={{ backgroundColor: `${e}` }} 
        className="w-[30px] h-[30px] rounded-[50px]"
    />
))}
          </div>
        </div>
        <div className="flex flex-col font-[600] mt-4">
          <label htmlFor="amount">Amount</label>
          <select id="amount" className="select select-warning w-full max-w-xs">
            <option disabled defaultValue>
              0
            </option>
            {[...Array(10)].map((_, i) => (
              <option key={i}>{i + 1}</option>
            ))}
          </select>
        </div>
        <button className="btn border-t-cyan-400 btn-md mt-4" onClick={handleAddToBag}>
          ADD TO BAG
        </button>
      </div>
    </div>
  );
}

export default ToliqMalumodlar;
