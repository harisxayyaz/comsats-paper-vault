"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-black">
      <main className="flex flex-col items-center justify-center flex-1 p-5 text-center">
        <h1 className="text-6xl font-bold animate-fadeIn font-punk">
          Welcome to <span className="text-green-700">COMSATS Paper Vault</span>
        </h1>

        <p className="mt-5 text-2xl animate-fadeIn font-punk">
          Your one-stop destination for all comsats past papers ;{")"}
        </p>

        <button
          onClick={() => {
            router.push("/dashboard");
          }}
          className="flex text-lg font-bold items-center gap-1 text-white animate-fadeIn justify-center bg-green-700 w-36 h-10 mt-5 rounded-xl hover:bg-green-900 hover:ease-in duration-300"
        >
          <p className="transform">Let's go -{">"}</p>
        </button>
      </main>

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
          animation: fadeIn 2s ease-in-out;
        }
      `}</style>
    </div>
  );
}
