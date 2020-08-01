import React, { Fragment, useState, useEffect } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import NewsList from "./components/NewsList";

function App() {
  const [category, saveCategory] = useState("");
  const [newsList, saveNews] = useState([]);

  useEffect(() => {
    const api = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2e02d31ee5af4427aa2b20ce4631a741`;

      const response = await fetch(url);
      const newsList = await response.json();

      saveNews(newsList.articles);
      console.log(newsList);
    };
    api();
  }, [category]);

  return (
    <Fragment>
      <Header title="News"></Header>
      <div className="container white">
        <Form saveCategory={saveCategory} />
        <NewsList newsList={newsList} />
      </div>
    </Fragment>
  );
}

export default App;
