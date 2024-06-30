import React from "react";

interface CardProps {
  name: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ name, description }) => {
  return (
    <div className="flex flex-col p-4 bg-white border-2 h-72 w-72 text-3xl font-bold gap-2 rounded-xl justify-between pt-8 pb-8 cursor-pointer transition-transform duration-300 hover:shadow-md transform hover:-translate-y-1">
      <h1>{name}</h1>
      <p className="text-base text-left text-gray-600">{description}</p>
      <button className="flex text-lg gap-1 items-center text-white animate-fadeIn justify-center hover:justify-between hover:pl-5 hover:pr-5 bg-green-700 w-36 h-10 rounded-xl hover:bg-green-900 hover:border-white hover:border-2 transition-all duration-300">
        <p className="transform">Let's go</p>
        <p className="transform ml-0 hover:ml-5"> -&gt;</p>
      </button>
    </div>
  );
};

export default Card;
