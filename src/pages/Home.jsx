import React from "react";
import { Account } from "../components/home/Account";
import { Connected } from "../components/home/Connected";
import { Dashboard } from "../components/home/Dashboard";
import { Features } from "../components/home/Features";
import { GettingStarted } from "../components/home/GettingStarted";
import { Hero } from "../components/home/Hero";
import { HowItWorks } from "../components/home/HowItWorks";
import { Statement } from "../components/home/Statement";
import { Footer } from "../layouts/Footer";
import Header from "../layouts/Header";

const Home = () => {
  return (
    <div className="max-w-[1536px] mx-auto">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Account />
      <Statement />
      <Connected />
      <Dashboard />
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default Home;
