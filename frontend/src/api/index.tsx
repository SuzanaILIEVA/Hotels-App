import axios from "axios";
import { PlaceData } from "../types";


const api = axios.create({ baseURL: "http://localhost:4000" });

export type Params = {
  location: string;
  title: string;
  order: string;
};

// butun konaklama yerlerini getiren fonksiyon
export const getPlaces = (params: Params) =>
  api.get("/api/places", { params }).then((res) => res.data.places);

// Bir konaklama yerini getirmek icin fonksiyon
export const getPlace = (id:string) => 
  api.get(`/api/place/${id}`).then((res) =>res.data.place);


// Bir konaklama yerini silmek icin 
export const deletePlace = (id:number) =>
  api.delete(`/api/place/${id}`) ;

// Bir konaklama yerini EKLEMEK icin 

export const createPlace = (body : PlaceData) =>
  api.post(`/api/places`, body)
