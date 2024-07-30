import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPlaces, Params } from "../../api";
import { Place } from "../../types";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";

const List = () => {
  //url'deki parametreleri al nesne haline getir
  const [params] = useSearchParams();
  // console.log(params);
  
  const paramsObj = Object.fromEntries(params.entries());
  // console.log(paramsObj);

  const { isLoading, error, data } = useQuery<Place[]>({
    queryKey: ["places", paramsObj],
    queryFn: () => getPlaces(paramsObj as Params),
  });

  //   console.log(data);

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl mb-3">Yakınınızdaki Lokasyonlar</h1>

      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error  info={error.message} name="places"/>
        ) : (
          <div className="grid gap-5 mt-5">
            {data?.map((place) => (
              <div key={place.id}>
                <Card place={place} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
