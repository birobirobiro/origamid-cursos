import React from "react";
import Head from "./Head";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      {/* <Head title="Esse é o título" description="Essa é  descrição da Home" /> */}
      <Helmet>
        <title>Dogs | Home</title>
        <meta name="description" content="Essa é  descrição da Home" />
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  );
};

export default Home;
