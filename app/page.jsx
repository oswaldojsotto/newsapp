import React from "react";
import styles from "../styles/globals.css";
import Noticia from "../components/Noticia";

const fetchNews = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5b1d72f59ef54992a5628712d78297ad"
  );
  return await res.json();
};

const mainPage = async () => {
  const articles = await fetchNews();
  return (
    <div>
      <h1 className="  font-bold text-3xl py-5 text-blue-700 max-w-xl m-auto pb-10 xxs:max-w-xs xs:max-w-md">
        Tech<span className=" text-3xl font-normal">News</span>
      </h1>

      {articles.articles.map(props => {
        return <Noticia key={props.title} {...props} />;
      })}
    </div>
  );
};

export default mainPage;
