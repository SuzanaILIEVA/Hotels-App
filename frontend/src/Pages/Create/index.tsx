import React from "react";
import Container from "../../components/container";
import { Field, Form, Formik } from "formik";
import {initial, inputs} from "../../constants"
import { PlaceData } from "../../types";
import { useMutation } from "@tanstack/react-query";
import { createPlace } from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate()

  const {isPending, mutate} =useMutation({

    mutationFn: (body: PlaceData) => createPlace(body),

    onSuccess: () => {
      toast.success("Konaklama noktası oluşturuldu")

      navigate("/")
    },
    onError: ()=>{
      toast.error("Üzgünüz bir sorun oluştu")
    }
  })
  
  const handleSubmit = (values : PlaceData) =>{
    console.log(values);

    // kopya olustur
    const body = { ...values}

    //ozellikleri diziye cevir
     body.amenities =( values.amenities as string).split(",")
    //  console.log(body);
     
    //api'ye istek at 
    mutate(body)

    
  }

  return (
    <Container>
      <Formik 
      initialValues={initial} 
      onSubmit={handleSubmit}
      >
        <Form >
        
          {inputs.map((i,key) => (
           <div key={key} className="max-w-2xl mx-auto grid grid-cols-1 gap-2 mb-8">
          <label className="font-bold" htmlFor="">{i.label}</label>
            <Field
            type={i.type || "text"}
            name={i.name}
            placeholder={i.label}
            className="border py-1 px-4 rounded-md shadow"
            />
           </div>
          ))}

          <div className=" flex justify-center">
          <button
          disabled={isPending}
          type="submit"
           className="border py-2 mb-10 w-[700px] rounded-md bg-blue-500 text-white font-bold hover:bg-blue-600">Gönder</button>
          </div>
         
        </Form>
      </Formik>
    </Container>
  );
};

export default Create;
