import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left"
        >
          <div>
            <img src={CDN_URL + item.card.info.imageId} className="w-20" />
            <div>
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>

          <div className="py-2 font-bold">
            <span>{item.card.info.name}</span>
            <span>
              {" "}
              - ₹
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
