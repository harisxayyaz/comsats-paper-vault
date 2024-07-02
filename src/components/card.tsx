'use client'
import React from "react";
import { useRouter } from "next/navigation";

interface CardProps {
  name: string;
  description: string;
  links: string[];
}

const Card: React.FC<CardProps> = ({ name, description, links }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/dashboard/${encodeURIComponent(name)}`);
  };

  return (
    <div
      className="flex flex-col p-4 bg-white border-2 h-72 w-72 text-2xl font-bold rounded-xl pt-8 pb-8 cursor-pointer transition-transform duration-300 hover:shadow-md transform hover:-translate-y-1"
      onClick={handleClick}
    >
      <h1 className=" h-[70px]">{name}</h1>
      <p className="text-base text-left text-gray-600 h-[90px]">
        {description}
      </p>

      <button className="flex font-medium text-sm gap-1 items-center text-white justify-center bg-green-700 w-36 h-10 rounded-xl hover:bg-green-900 ease-out duration-200">
        <p className="transform">View Papers -{">"}</p>
      </button>
    </div>
  );
};

export default Card;
