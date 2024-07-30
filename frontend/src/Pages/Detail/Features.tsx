import React from "react";

const Features = ({ arr }: { arr: string[] }) => {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <h2 className="font-bold text-xl">
        Popüler konaklama yeri imkan ve özellikleri
      </h2>

      <div className="grid grid-cols-2 gap-3 mt-5">
        {arr.map((i, key) => (
          <span key={key} className="border rounded-md py-1 px-3 bg-zinc-100">{i}</span>
        ))}
      </div>
    </div>
  );
};

export default Features;
