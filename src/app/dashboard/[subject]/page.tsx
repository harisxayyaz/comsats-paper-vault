"use client";

import React, { useState, useEffect } from "react";

interface Link {
  url: string;
  name: string;
}

interface Subject {
  name: string;
  description: string;
  links: Link[];
}

export default function Subject({ params }: { params: { subject: string } }) {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const decodedSubject = decodeURIComponent(params.subject);

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

  const subject = subjects.find((element) => element.name === decodedSubject);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          {decodedSubject}
        </h1>
        {subject ? (
          <ul className="space-y-4">
            {subject.links.map((link, index) => (
              <a
                href={link.url}
                key={index}
                className="bg-gray-100 p-4 cursor-pointer  rounded-lg hover:bg-gray-200 transition-colors duration-300 flex justify-between items-center"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 "
                >
            
                  {link.name}
                </a>
              </a>
            ))}
          </ul>
        ) : (
          <p className="text-green-500 text-center mt-4">Loading</p>
        )}
      </div>
    </div>
  );
}
