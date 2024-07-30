import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoTrashSharp } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import { deletePlace } from "../../api";
import {toast} from 'react-toastify'

const Buttons = ({ id }: { id: number }) => {
    const navigate = useNavigate()

  const { isPending, mutate } = useMutation({
    mutationFn: () => deletePlace(id),
    onSuccess: ()=>{
        toast.info("Hotel akıştan kaldırıldı")
        navigate("/")
    },
    onError:()=>{
        toast.error("Üzgünüz bir sorun oluştu")
    }
  });

  return (
    <div className="flex justify-between mb-5">
      <Link
        to="/"
        className=" flex items-center border py-1 px-3 rounded-md gap-2 transition hover:bg-gray-200 hover:shadow"
      >
        <MdKeyboardArrowLeft />
        Geri
      </Link>

      <button
        disabled={isPending}
        onClick={() => mutate()}
        className="flex items-center gap-2 border py-1 px-3 rounded-md transition hover:bg-red-200 hover:shadow disabled:bg-gray-200"
      >
        <IoTrashSharp className="text-red-500" />
        Sil
      </button>
    </div>
  );
};

export default Buttons;
