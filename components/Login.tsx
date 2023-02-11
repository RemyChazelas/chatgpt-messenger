"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-[#11a37f] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://links.papareact.com/2i6"
        alt="logo"
        width={300}
        height={300}
      />

      <button
        onClick={() => signIn("google")}
        className="text-3xl font-bold text-white animate-pulse"
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
};

export default Login;
