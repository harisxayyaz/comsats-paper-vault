'use client'
import React, { useState, useEffect } from "react";
import Card from "@/components/card";
import { useRouter } from "next/navigation";

interface Subject {
  name: string;
  description: string;
  links: string[];
}

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/subjects.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSubjects(data.subjects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          Welcome to COMSATS Past Papers
        </h1>
        <p className="text-sm md:text-lg">
          Helping out all the juniors out there -
        </p>
      </section>
      <div className="flex-grow bg-gray-200 flex justify-center p-4">
        <section className="flex flex-wrap gap-4 w-full max-w-[1200px] p-4 justify-center animate-fadeIn">
          {subjects.map((subject, index) => (
            <Card
              key={index}
              name={subject.name}
              description={subject.description}
              links={subject.links}
            />
          ))}
        </section>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
