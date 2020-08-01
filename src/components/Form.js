import React from "react";
import styles from "./Form.module.css";
import PropTypes from "prop-types";
import useSelect from "../hooks/useSelect";

const Form = ({ saveCategory }) => {
  const OPTIONS = [
    { value: "general", label: "General" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "health", label: "Health" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
  ];

  const [category, NewsSelect] = useSelect("technology", OPTIONS);

  const searchNews = (e) => {
    e.preventDefault();
    saveCategory(category);
  };

  return (
    <div className={`${styles.searchEngine} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={searchNews}>
          <h2 className={styles.heading}>Sort news</h2>
          <NewsSelect />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles.btn_block} btn-large waves-effect waves-light`}
              value="Search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  saveCategory: PropTypes.func.isRequired,
};

export default Form;

