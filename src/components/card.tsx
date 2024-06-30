import React from "react";

interface CardProps {
  name: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ name, description }) => {
  return (
    <div className="flex flex-col p-4 bg-white border-2 h-72 w-72 text-2xl font-bold  rounded-xl  pt-8 pb-8 cursor-pointer transition-transform duration-300 hover:shadow-md transform hover:-translate-y-1">
      <h1 className=" h-[70px]">{name}</h1>
      <p className="text-base text-left text-gray-600 h-[90px]">
        {description}
      </p>

      <button className="flex font-medium text-sm gap-1 items-center text-white animate-fadeIn justify-center hover:justify-between hover:pl-4 hover:pr-4 bg-green-700 w-36 h-10 rounded-xl hover:bg-green-900 hover:border-white hover:border-2 transition-all duration-300">
        <p className="transform">View Papers</p>
        <p className="transform ml-0 hover:ml-5"> -{">"}</p>
      </button>
    </div>
  );
};

export default Card;
