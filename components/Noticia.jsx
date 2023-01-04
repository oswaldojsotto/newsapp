import React from "react";
import Image from "next/image";
import styles from "../styles/globals.css";

const Noticia = ({ title, description, urlToImage, author, content, url }) => {
  return (
    <div key={title} className="max-w-xl m-auto pb-10 xxs:max-w-xs xs:max-w-md">
      <p className="max-w-xl m-auto text-2xl font-semibold mt-2 mb-2">
        {title}{" "}
      </p>
      <p className="text-sm font-normal  text-gray-700 pb-4">
        Author: {author}.{" "}
      </p>
      <p className="max-w-xl m-auto  text-gray-700 xxs:text-xxs">
        {description}
      </p>
      <Image
        className="w-auto h-auto  md:max-w-2"
        alt="image"
        src={urlToImage}
        width="500"
        height="350"
        priority={true}
        placeholder="empty"></Image>
      <p className="  text-gray-700">
        {" "}
        {content}{" "}
        <span>
          <a
            className="text-orange-600 underline"
            href={url}
            target="_blank"
            rel="noreferrer">
            Source
          </a>
        </span>
      </p>
      <br />
      <hr />
    </div>
  );
};

export default Noticia;
