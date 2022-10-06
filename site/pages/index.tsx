import type { NextPage } from "next";
import Image from "next/image";
import ArticlesSection from "../components/articles/articlesSection";
import ContactSection from "../components/contact/contactSection";
import SocialSection from "../components/social/socialSection";
import HomeSection from "../components/home/HomeSection";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <HomeSection />
      <ArticlesSection />
      <SocialSection />
      <ContactSection />
    </div>
  );
};

export default Home;
