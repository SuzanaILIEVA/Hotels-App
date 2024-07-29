import React from "react";
import { Place } from "../../types";

const Rating = ({ point , expand}: { point: number ,expand?:boolean}) => {
  // renk belirle
  const color =
    point >= 4 ? "bg-green-500" : point >= 3 ? "bg-yellow-500" : "bg-red-500 ";

 const text = point >= 4.5 ? "Olağanüstü" : point >= 4 ? "Güzel" : point >= 3 ? "İyi" : point >= 2 ? "Kötü" : "Çok Kötü"

  return (
    <div className={expand ? "flex gap-2 items-center" : ""} >
      <p className={`${color} text-white p-1 rounded-lg  font-bold w-fit `}>
        {point}
      </p>

      {expand && (
        <span className="font-semibold text-lg">{text}</span>
      )}
    </div>
  );
};

export default Rating;
