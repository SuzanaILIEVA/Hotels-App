import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getPlace } from "../../api";
import Container from "../../components/container";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Buttons from "./Buttons";
import Rating from "../Home/Rating";
import { Place } from "../../types";
import Features from "./Features";
import Availability from "../Home/Availability";
import Price from "./Price";

const Detail = () => {
  //URL'den id'yi alamak icin useParams kullaniyoruz.
  const { id } = useParams();
  // console.log(id);

  const { isLoading, error, data } = useQuery<Place>({
    queryKey: ["place"],
    queryFn: () => getPlace(id as string),
  });

  return (
    <Container designs="max-w-[700px]">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error.message} name="place" />
      ) : data ? (
        <div className="flex flex-col gap-3">
          <Buttons id={data.id} />

          <div className="flex justify-between ">
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <Rating point={data.rating} expand />
          </div>

          <p>{data.description}</p>
          <img src={data.image_url} className="rounded-md" />

          <Features arr={data.amenities} />

          <div className="flex justify-between my-10  items-center">
            <Price data={data.price_per_night} />
            <Availability status={data.availability} expand />
          </div>

          <div >
            {data.availability ?
              (<button className=" w-full border py-2 px-4 mb-5 bg-blue-500 text-white font-bold hover:bg-blue-600 rounded-md" >Rezarvasyon Yap</button>) : 
              (<button disabled className=" w-full border py-2 px-4 mb-5 text-white font-bold hover:bg-blue-600 rounded-md disabled:bg-gray-400" >Rezarvasyon Yap</button>)  
              }
          </div>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Detail;
