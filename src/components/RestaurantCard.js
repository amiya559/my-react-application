import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo } = resData?.info;

  return (
    <div className="m-4 p-4 w-[300px] h-[350px] rounded-lg bg-gray-100 hover:bg-pink-100">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h3>{costForTwo}</h3>
      <h4 className="py-0.5">{avgRating} stars</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-white text-black m-2 p-2 rounded-lg">PROMOTED</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
