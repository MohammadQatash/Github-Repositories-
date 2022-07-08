import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import ReposeCards from "./components/ReposeCards";
import Loading from "./components/Loading";
import Alert from "./components/Alert";

const url = "https://api.github.com/search/repositories?q=";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [reposeList, setReposeList] = useState([]);
  const [, setErr] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
    searchValue: "",
  });
  const [showRepos, setShowRepos] = useState([]);

  async function fetchRepos(reposeName) {
    setLoading(true);
    try {
      const response = await fetch(url + `${reposeName}`);
      const repose = await response.json();
      setLoading(false);
      return repose.items;
    } catch (err) {
      setLoading(false);
      setErr(err);
    }
  }

  const handleSubmit = (e, searchValue, setSearchValue) => {
    e.preventDefault();
    if (!searchValue) {
      showAlert(true, "danger", "The field is empty", searchValue);
      return console.log(searchValue);
    } else {
      fetchRepos(searchValue)
        .then((repos) => {
          console.log(repos);
          const newRepos = repos.filter((repo) => {
            return (
              searchValue.toLowerCase().trim() ===
              repo.name.toLowerCase().trim()
            );
          });
          if (newRepos.length === 0) {
            showAlert(
              true,
              "danger",
              "There is no repos with this name",
              searchValue
            );
          }
          console.log("newRepo", newRepos);
          setReposeList([...newRepos, ...reposeList]);
          setSearchValue((searchValue = ""));
          console.log("reposList", reposeList);
        });
    }
  };

  function removeRepo(id) {
    const newRepo = showRepos.filter((repo) => {
      return repo.id !== id;
    });
    setShowRepos(newRepo);
  }

  const addToRepos = (repo) => {
    setReposeList([]);
    setShowRepos([repo, ...showRepos]);
    return console.log(showRepos);
  }

  const showAlert = (show = false, type = "", msg = "", searchValue = "") => {
    setReposeList([]);
    setAlert({ show, type, msg, searchValue });
  };


  return (
    <main className="main">
      <div className="container">
        <section className="repos-search">
          <SearchForm
            handleSubmit={handleSubmit}
            reposeList={reposeList}
            addToRepos={addToRepos}
          />
        </section>

        {alert.show && <Alert {...alert} removeAlert={showAlert} />}

        {loading === true ? (
          <Loading />
        ) : showRepos.length > 0 ? (
          <section className="repositories-cards">
            {showRepos.map((repo, repoIndex) => {
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
          ""
        )}
      </div>
    </main>
  );
};;

export default App;
