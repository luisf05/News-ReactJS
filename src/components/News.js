import React from "react";
import PropTypes from "prop-types";
import styles from "./News.module.css";

const News = ({ news }) => {
  const { urlToImage, url, title, description, source } = news;

  const image = urlToImage ? (
    <div className="card-image ">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className={`${styles.news_container} card`}>
        {image}

        <div className="card-content h">
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>

        <div className="card-action center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            Show all content
          </a>
        </div>
      </div>
    </div>
  );
};

News.propTypes = {
  news: PropTypes.object.isRequired,
};
export default News;
