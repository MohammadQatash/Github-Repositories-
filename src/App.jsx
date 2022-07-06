import React, { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import ReposeCards from "./components/ReposeCards";
import Loading from "./components/Loading";
import Error from "./components/Error";

const url = "https://api.github.com/search/repositories?q=";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [repose, setRepose] = useState([]);
  const [err, setErr] = useState('');

  const hi = function(e) {
    e.preventDefault();
    console.log('hi');
  }

  const fetchRepos = async (reposeName) => {
    setLoading(true);
    try {
      const response = await fetch(url + `${reposeName}`);
      const repose = await response.json();
      setLoading(false);
      setRepose(repose.items);
    } catch (error) {
      setLoading(false);
      setErr(error);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepos("50projects50days");
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (err) {
    return (
      <main>
        <Error />
      </main>
    );
  }

  return (
    <main className="main">
      <div className="container">
        <section className="repos-search">
          <SearchForm hi={hi} />
        </section>

        <section className="repositories-cards">
          {repose.map((repo, repoIndex) => {
            return <ReposeCards key={repoIndex} {...repo} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
