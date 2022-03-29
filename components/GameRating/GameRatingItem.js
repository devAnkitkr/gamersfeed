import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
export default function GameRatingItem({ gameIcon, rating, gameTitle, slug }) {
  const router = useRouter();
  return (
    <div
      className="w-max bg-white rounded flex flex-col items-center justiy-center p-2 my-4 lg:mx-4 cursor-pointer hover:drop-shadow-xl ease-in duration-150"
      onClick={() => router.push(`/post/${slug} `)}
    >
      <div className="w-20 h-20  mb-2 rounded-full bg-gradient-to-r from-[#fdeb85] to-[#fe8ba8] flex justify-center items-center">
        <div className="w-16 h-16 rounded-full relative flex flex-col justify-center items-center">
          <Image
            src={gameIcon}
            layout="fill"
            className="w-18 h-18"
            alt="game icon"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2>{gameTitle}</h2>
        <span className="flex">
          {[...Array(5)].map((x, i) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className={`scale-75 ${
                rating >= i + 1 ? 'fill-yellow-400' : 'fill-gray-300'
              }`}
              key={i}
            >
              <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
            </svg>
          ))}
        </span>
      </div>
    </div>
  );
}
