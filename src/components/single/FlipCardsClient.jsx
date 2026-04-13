"use client";

import dynamic from "next/dynamic";

const FlipCards = dynamic(() => import("./FlipCards"), { ssr: false });

const FlipCardsClient = () => {
  return <FlipCards />;
};

export default FlipCardsClient;
