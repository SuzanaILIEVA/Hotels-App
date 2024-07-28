import axios from "axios";

const api = axios.create({baseURL:"http://localhost:4000"})

// butun konaklama yerlerini getiren fonksiyon
export const getPlaces = () => api
  .get("/api/places")
  .then((res) => res.data.places);


  // Bir konaklama yerini getirmek icin fonksiyon 
  export const getPlace = () => api
  .get("/api/places/1")
  .then((res) => res.data);

