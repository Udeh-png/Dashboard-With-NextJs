"use client";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { signIn } from "next-auth/react";
import { FaCircleUser } from "react-icons/fa6";

export const LoginButton = () => {
  const [hover, setHover] = useState<boolean | null>(false);
  const session = useSession();
  const userSession = session.data?.user;

  return (
    <div
      className="relative px-1 flex items-center"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <button className="h-11 w-11 rounded-full relative">
        {userSession ? (
          <Image
            fill
            src={userSession?.image ? userSession?.image : "/"}
            alt="DP"
            className="rounded-full"
          />
        ) : (
          <FaCircleUser className="w-full h-full" />
        )}
        <p className="absolute -bottom-[15px] text-[13px] font-semibold right-1/2 translate-x-1/2 w-[125%]">
          Sign {!userSession ? "in" : "out"}
        </p>
      </button>
      {hover && (
        <div className="absolute right-full top-1/2 z-10">
          <div className="flex flex-col gap-1 bg-[rgba(240,240,240,1)] rounded-tl-2xl rounded-b-2xl p-2 text-[13px] w-36">
            {userSession ? (
              <button
                className="py-2 font-semibold px-1 cursor-pointer rounded-lg hover:bg-gray-200 transition-colors text-red-500"
                onClick={() => {
                  signOut();
                }}
              >
                Sign out
              </button>
            ) : (
              <button
                className="py-2 font-semibold px-1 cursor-pointer rounded-lg hover:bg-gray-200 transition-colors"
                onClick={() => {
                  signIn();
                }}
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
