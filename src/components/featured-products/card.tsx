import Image from "next/image";
import React from "react";

const ProductCard = ({ mood, names }: { mood: string; names: string[] }) => {
  return (
    <div className="flex justify-between items-start p-4 h-full text-start">
      <div className="flex flex-col justify-between gap-2 h-full details">
        <h1 className="text-6xl">{mood}</h1>
        <span className="h-full text-2xl font__handwriting">Suitable tea flavours</span>
        <ul className="text-green-700">
          {names.map(name => (
            <li className="text-4xl font__handwriting" key={name}>{name}</li>
          ))}
        </ul>
      </div>
      <div className="picture">
        <Image
          src={`/tea_${mood}.png`}
          alt={mood}
          width={200}
          height={200}
          priority
          loading="eager"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductCard;
