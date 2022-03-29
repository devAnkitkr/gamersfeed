import React from 'react';

import GameRatingItem from './GameRatingItem';

export default function GameRatingSection({ gamesOftheWeek }) {
  const { articles } = gamesOftheWeek;
  return (
    <div className="flex flex-col justify-center items-center m-4 p-4 my-10 border">
      <h1 className="underline decoration-yellow-300 mb-2 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-[#fe8ba8]">
        GAMES OF THE WEEK
      </h1>
      <div className="w-full flex justify-center flex-wrap items-center">
        {articles &&
          articles.map((game) => (
            <GameRatingItem
              gameIcon={game.gameIcon.url}
              rating={game.rating}
              gameTitle={game.gameTitle}
              key={game.id}
              slug={game.slug}
            />
          ))}
      </div>
    </div>
  );
}
