import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import Loader from "../components/Loader";
import { getArticles } from "../services/api";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const data = await getArticles();
        setArticles(data);
        console.log(data);
        const latestTag = [...new Set(data?.map((res) => res?.section))];
        setTags(latestTag);
      } catch (error) {
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <section className="pt-24 bg-gradient-to-r from-light via-slate-100 to-light text-slate-600 ">
      <div className="container  mx-auto">
        <h1 className="text-3xl px-4 ">Latest News</h1>

        <ul className="flex  flex-wrap gap-2 gap-y-4 my-8 px-4 ">
          {tags?.map((tag) => (
            <li
              key={tag}
              className="px-6 p-1 border border-slate-600 rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>

        {loading ? (
          <Loader />
        ) : error ? (
          <div className="grid place-items-center w-full h-96 backdrop-blur-xl text-xl">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6 xl:col-span-3 px-4 ">
              {articles?.map((article) => (
                <ArticleCard article={article} key={article.id} />
              ))}
            </div>

            <div className="md:order-3  xl:order-1 col-span-12 xl:col-span-6 px-4 ">
              {articles?.map((article) => (
                <ArticleCard article={article} key={article.id} height="h-96" />
              ))}
            </div>

            <div className=" order-1 col-span-12 md:col-span-6 xl:col-span-3 px-4 ">
              {articles?.map((article) => (
                <ArticleCard article={article} key={article.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePage;
