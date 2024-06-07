import React from 'react'
import Navbar from '../components/Navbar'
import Styles from "./index.module.css"
import ListTrain from '../components/ListTrain'
import ContactForm from '../components/ConctactForm'
import Footer from '../components/footer'
import Head from 'next/head'



function IndexPage() {
  return (
    <>
        <Head>
                <title>Home</title>
                <meta name="description" content="Beschreibung der Startseite" />
                <link rel="icon" href="../public/logo.png" />
        </Head>

        <div className={Styles.gallery}>
            <img className={Styles.image} src="/panda.JPG" />
            <div className={Styles.textBox}>
              <h1 className={Styles.title}>Herzlich Willkommen zu Digibra</h1>
              <div>
                  <p>Lorem laborum laborum dolor veniam aliqua irure tempor dolore. 
                  Qui cillum qui duis cillum. Esse veniam sint minim ipsum eu cillum non irure 
                  laboris esse proident amet qui.</p>
              </div>
            </div>
        </div>
        <h1 className={Styles.title}>Modelleisenbahnen</h1>
        <ListTrain />
        <ContactForm /> 
        <Footer />
    </>
  ) /** Test */
}

export default IndexPage
