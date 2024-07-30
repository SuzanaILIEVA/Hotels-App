import React from "react";
import { Place } from "../../types";
import Availability from "./Availability";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Card = ({ place }: { place: Place }) => {
  // console.log(place);

  return (
    <Link to={`/place/${place.id}`}>
      <div className="border rounded-md cursor-pointer p-4 gap-3 min-h-[300px] grid grid-cols-6">
        <div className="col-span-2">
          <img
            src={place.image_url}
            alt="room"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="col-span-4 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">{place.name}</h1>
              <Availability status={place.availability} />
            </div>
            <p>{place.location}</p>

            <div>
              <p className="flex gap-2">
                {place.amenities.slice(0, 2).map((i, key) => (
                  <span className="border p-2 rounded-md" key={key}>
                    {i}
                  </span>
                ))}
              </p>
            </div>
            <Rating point={place.rating} />
          </div>

          <div className="flex flex-col  items-end">
            <span className="text-2xl font-bold">{place.price_per_night}$</span>
            <span className="text-sm text-gray-500">
              Vergiler ve ücretler dahildir
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
