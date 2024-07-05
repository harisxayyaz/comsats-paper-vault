"use client";
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
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen flex flex-col">
      <header className="flex flex-col justify-center items-center text-center p-4 bg-white shadow-md z-10 w-full">
        <h1 className="text-2xl font-bold mb-2">
          Welcome to COMSATS Past Papers
        </h1>
        <p className="text-sm md:text-lg">
          Helping out all the juniors out there -
        </p>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search subjects..."
          className="mt-4 p-2 border border-gray-300 rounded"
        />
      </header>
      <div className="flex-grow bg-gray-200 flex justify-center p-4">
        <section className="flex flex-wrap gap-4 w-full max-w-[1200px] min-h-screen p-4 justify-center animate-fadeIn mt-20">
          {filteredSubjects.map((subject, index) => (
            <Card
              key={index}
              name={subject.name}
              description={subject.description}
              links={subject.links}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
