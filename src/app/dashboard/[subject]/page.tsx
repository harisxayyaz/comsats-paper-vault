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
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl animate-fadeIn">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          {decodedSubject}
        </h1>
        {subject ? (
          <ul className="space-y-4">
            {subject.links.map((link, index) => (
              <li key={index} className="flex items-center">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-4 cursor-pointer rounded-lg hover:bg-gray-200 transition-colors duration-300 flex-grow text-blue-600 hover:text-blue-800 flex items-center space-x-2"
                >
                  <svg
                    className="w-6 h-6 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z" />
                  </svg>
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-green-500 text-center mt-4">Loading</p>
        )}
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

        @media (max-width: 640px) {
          .p-8 {
            padding: 1rem;
          }

          .text-4xl {
            font-size: 1.5rem;
          }

          .p-4 {
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
