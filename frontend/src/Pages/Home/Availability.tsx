import React from "react";
import { MdEventAvailable } from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";

const Availability = ({ status,expand }: { status: boolean, expand?:boolean }) => {
  return (
    <div
      className={`flex item-center gap-4 border p-2 rounded-md ${
        status ? "bg-green-100" : "bg-red-100"
      } ${expand ? "pe-4" : ""}`}
    >
      {status ? <MdEventAvailable className="text-2xl text-green-700" />
       : <CgUnavailable className="text-2xl text-red-700"/>}


   {expand && (
        <p className="font-semibold ">
        {status ? "Şuan Konaklanabilir" : "Konaklamak için müsait değil"}
        </p>
    )}
    </div>

  
  );
};

export default Availability;
