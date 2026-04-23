"use client";

import dynamic from "next/dynamic";

const FlipCards = dynamic(() => import("./FlipCards"), {
  loading: () => (
    <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
      {[1].map((i) => (
        <div
          key={i}
          className="h-72 md:h-96 bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse"
        />
      ))}
    </div>
  ),
  ssr: false,
});

const FlipCardsClient = () => {
  return <FlipCards />;
};

export default FlipCardsClient;
