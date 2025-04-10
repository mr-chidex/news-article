import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ArticleDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.article) {
    return (
      <div className="p-4">
        Article not found.{" "}
        <button onClick={() => navigate(-1)} className="text-blue-600">
          Go back
        </button>
      </div>
    );
  }

  const { article } = state;

  return (
    <section className="pt-24 bg-gradient-to-r from-light via-slate-100 to-light text-slate-600 ">
      <div className="max-w-3xl mx-auto  ">
        <div className=" p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {article.title}
          </h1>
          <p className="text-sm text-gray-500 mb-1">{article.byline}</p>
          <p className="text-sm text-gray-500 mb-4">
            Published: {new Date(article.published_date).toLocaleString()}
          </p>

          <img
            className="w-full h-96 object-cover rounded mb-4"
            src={
              article.media?.[0]?.["media-metadata"]?.[2]?.url ||
              "/placeholder.jpg"
            }
            alt={article.title}
          />

          <p className="text-lg text-gray-800 mb-6">{article.abstract}</p>

          <p className="text-sm text-gray-500">
            <span className="font-semibold">Author: </span>
            {article.author || "Unknown"}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Source: </span>
            {article.source || "Unknown Source"}
          </p>

          <div className="mb-6">
            <p className="text-lg leading-relaxed">{article.content}</p>{" "}
            {/* Full article content */}
          </div>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View full article on NYTimes →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
