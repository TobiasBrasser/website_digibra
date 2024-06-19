import React from 'react';
import Navbar from '../components/Navbar';
import Styles from "./index.module.css";
import Head from 'next/head';

function IndexPage() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Beschreibung der Startseite" />
        <link rel="icon" href="./logo.png" />
      </Head>

      <div className={Styles.gallery}>
        <img className={Styles.image} src="../public/panda.jpg" />
        <h1 className={Styles.title}>Herzlich Willkommen zu Digibra</h1>
        <p className={Styles.paragraph}>Lorem laborum laborum dolor veniam aliqua irure tempor dolore. 
           Qui cillum qui duis cillum. Esse veniam sint minim ipsum eu cillum non irure 
           laboris esse proident amet qui.</p>
      </div>

      <ListTrain />
    </>
  );
}

export default IndexPage;
