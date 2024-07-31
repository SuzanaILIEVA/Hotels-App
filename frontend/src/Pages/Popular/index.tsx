import React from "react";
import Container from "../../components/container";
import { Place, PlaceData } from "../../types";
import { FaFireAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getPlace, getPlaces, Params } from "../../api";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Rating from "../Home/Rating";
import Price from "../Detail/Price";
import Availability from "../Home/Availability";

const Popular = () => {
  //url'deki parametreleri al nesne haline getir
  const [params] = useSearchParams();
  // console.log(params);

  const paramsObj = Object.fromEntries(params.entries());
  // console.log(paramsObj);

  const { isLoading, error, data } = useQuery<Place[]>({
    queryKey: ["places", paramsObj],
    queryFn: () => getPlaces(paramsObj as Params),
  });
  console.log(data);

  return (
    <Container>
      <div className="flex items-center justify-center gap-3 py-6">
        <h1 className="text-2xl font-bold "> Bu Hafta En Popüler Hoteller</h1>
        <FaFireAlt className="text-red-500  text-2xl" />
      </div>

      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error info={error.message} name="places" />
        ) : data ? (
          <div className="flex flex-col gap-10 justify-center  ">
            {data.map((i, key) => {
              if (i.rating >= 4) {
                return (
                  <div
                    key={key}
                    className="grid grid-cols-1 md:grid-cols-2 md:gap-7 border p-5 rounded-lg transition hover:scale-[1.05] shadow-lg mt-5"
                  >
                    <img
                      src={i.image_url}
                      className=" w-full h-[400px] popimg"
                    />

                    <div className="flex flex-col">
                      <div className="flex justify-between items-start mt-5">
                        <p className="text-2xl font-bold">{i.name}</p>
                        <Rating point={i.rating} expand />
                      </div>
                      <p>{i.description}</p>
                      <p>{i.location}</p>

                      <div className="grid grid-cols-2 gap-4 py-7 ">
                        {i.amenities.map((item) => (
                          <p className=" border py-1 px-4 rounded-md bg-gray-200 ">
                            {item}
                          </p>
                        ))}
                      </div>

                      <div className="flex justify-between">
                        <Price data={i.price_per_night} />
                        <Availability status={i.availability} expand />
                      </div>
                      <div className="mt-10">
                      {i.availability ?
              (<button className=" w-full border py-2 px-4 mb-5 bg-blue-500 text-white font-bold hover:bg-blue-600 rounded-md" >Rezarvasyon Yap</button>) : 
              (<button disabled className=" w-full border py-2 px-4 mb-5 text-white font-bold hover:bg-blue-600 rounded-md disabled:bg-gray-400" >Rezarvasyon Yap</button>)  
              }
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};

export default Popular;
