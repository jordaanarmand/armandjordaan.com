import type { NextPage } from "next";
import ArticlesSection from "../components/articles/articlesSection";
import HomeSection from "../components/home/HomeSection";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <HomeSection />
      {/*<ArticlesSection />*/}
    </div>
  );
};

export default Home;
