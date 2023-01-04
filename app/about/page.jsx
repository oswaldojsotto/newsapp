import React from "react";
import styles from "../../styles/globals.css";

const page = () => {
  return (
    <div className="max-w-xl m-auto pb-10 xxs:max-w-xs xs:max-w-md">
      <h1>
        This is a small project developed in Next.js 13 to test the new features
        of the framework, using tailwind CSS and:
      </h1>
      <br />
      <ul>
        <li>* New app folder router feature</li>
        <li>* New SSR (server side rendering) components</li>
        <li>* New CSR (client side rendering) components</li>
      </ul>
    </div>
  );
};

export default page;
