import Head from "next/head";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import About from "../components/layout/About";
import Contact from "../components/layout/Contact";
import Experience from "../components/layout/Experience";
import FindMe from "../components/layout/FindMe";
import Header from "../components/layout/Header";
import Skills from "../components/layout/Skills";
import Profile from "../components/layout/Profile";
import Projects from "../components/layout/Projects";

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home(props: Props) {
  return (
    <div className="bg-gray-800 h-screen text-white snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0">
      <Head>
        <title>Adrian Brisan</title>
        <meta
          name="description"
          content="Full Stack developer working mainly with React / React Native / nodeJS / graphqlQL / mongoDB / mySQL"
        />
        <meta
          name="keywords"
          content="React Developer, React, React Native Developer, React Native, nodeJS, graphQL, mongoDB, Next.JS"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%3E%3Ctext%20x='0'%20y='14'%3E💻️%3C/text%3E%3C/svg%3E"
          type="image/svg+xml"
        />
      </Head>
      {/* Header */}
      <Header />
      <section className="snap-center" id="profile">
        <Profile />
      </section>

      {/* About */}
      <section className="snap-center" id="about">
        <About />
      </section>

      {/* Experience */}
      <section className="snap-center" id="experience">
        <Experience />
      </section>

      {/* Skills */}
      <section className="snap-start" id="skills">
        <Skills />
      </section>

      {/* Projects */}
      <section className="snap-start" id="projects">
        <Projects />
      </section>

      {/*TODO: FIND ME GITHUB ANIMATION*/}
      <section className="snap-start" id="findme">
        <FindMe />
      </section>

      {/* Contact Me */}
      <section className="snap-start" id="contact">
        <Contact />
      </section>
    </div>
  );
}
