import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import ReposeCards from "./components/ReposeCards";
import Loading from "./components/Loading";
import Error from "./components/Error";

const url = "https://api.github.com/search/repositories?q=";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [repose, setRepose] = useState([]);
  const [reposeList, setReposeList] = useState([]);
  const [err, setErr] = useState('');

  async function fetchRepos (reposeName) {
    setLoading(true);
    try {
      const response = await fetch(url + `${reposeName}`);
      const repose = await response.json();
      setLoading(false);
      setRepose(repose.items);
      return repose.items;
    } catch (error) {
      setLoading(false);
      setErr(error);
      console.log(error);
    }
  };

  const handleSubmit = (e, searchValue, setSearchValue) => {
    e.preventDefault();
    if (searchValue === "") {
      return setReposeList([]); //show alert
    } else {
      fetchRepos(searchValue).then((repos) => {
        console.log(repos);
        setReposeList([]);
        const newRepos = repos.filter((repo) => {
          return searchValue.toLowerCase().trim() === repo.name.toLowerCase().trim()
        });
        console.log("newRepo", newRepos);
        setReposeList(newRepos);
        setSearchValue(searchValue = '');
        console.log("reposList", reposeList);
      });
    }
  };

  function removeRepo(id) {
    const newRepo = reposeList.filter((repo) => {
      return repo.id !== id;
    });
    setReposeList(newRepo);
  }

  return (
    <main className="main">
      <div className="container">
        <section className="repos-search">
          <SearchForm handleSubmit={handleSubmit} />
        </section>

        {loading ? (
          <Loading />
        ) : reposeList.length > 0 ? (
          <section className="repositories-cards">
            {reposeList.map((repo, repoIndex) => {
              return (
                <ReposeCards
                  key={repoIndex}
                  {...repo}
                  removeRepo={removeRepo}
                />
              );
            })}
          </section>
        ) : (
          <Error />
        )}
      </div>
    </main>
  );
};

export default App;
