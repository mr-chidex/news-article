import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article, height = "h-44" }) => {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/${encodeURIComponent(article.title)}`, {
      state: { article },
    });
  };

  return (
    <>
      <article className="flex flex-col gap-4 mb-8 border-b pb-8 border-slate-300">
        <img
          className={`w-full ${height} object-cover rounded-sm`}
          src={article?.media[0]?.["media-metadata"]?.[2]?.url}
          alt={article?.title}
        />
        <div className="">
          <div className="font-bold text-xl mb-2">{article?.title}</div>
          <p className="text-gray-700 text-base">{article?.abstract}</p>
        </div>
        <div className="flex justify-between items-center text-xs text-gray-500 ">
          <span>{new Date(article?.published_date).toDateString()}</span>
        </div>
        <div className="">
          <button
            onClick={goToDetails}
            className="text-indigo-500 underline hover:text-indigo-700"
          >
            Read More
          </button>
        </div>
      </article>
    </>
  );
};

export default ArticleCard;

// Prop validation using PropTypes
ArticleCard.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    media: PropTypes.any,
    url: PropTypes.string.isRequired,
    abstract: PropTypes.string,
    published_date: PropTypes.string,
    section: PropTypes.string,
  }).isRequired,
  height: PropTypes.string,
};
