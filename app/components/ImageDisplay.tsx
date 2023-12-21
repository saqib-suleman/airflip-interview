"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const urls = [
  "/head-black_front.png",
  "/head-black_front-side-left.png",
  "/powerhead_back.png",
];

const ImageComp = ({
  url,
  handleClick,
}: {
  url: string;
  handleClick: (url: string) => void;
}) => {
  return (
    <div className="border-2 rounded-xl p-2 hover:border-black">
      <Image
        onClick={() => handleClick(url)}
        src={url}
        alt="main"
        height={200}
        width={450}
      />
    </div>
  );
};

export const ImageDisplay = () => {
  const [mainURL, setMainURL] = useState<string>("");

  const handleClick = useCallback((url: string) => {
    return setMainURL(url);
  }, []);

  useEffect(() => {
    setMainURL(urls[0]);
  }, [setMainURL]);

  return (
    <div>
      <div className="border-2 rounded-xl p-8 hover:border-black flex justify-center">
        <Image src={mainURL} alt="main" height={250} width={370} />
      </div>
      <div>
        <div className="flex mt-3 justify-between gap-5">
          {urls.map((url) => (
            <ImageComp key={url} url={url} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};
