import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import ReposeCards from "./components/ReposeCards";
import { data } from './data';

const App = () => {
  const [repose, setRepose] = useState(data);

  return (
    <main className="main">
      <div className="container">
        <section className="repos-search">
          <SearchForm />
        </section>

        <section className="repositories-cards">
          <ReposeCards repose={repose} />
          <ReposeCards repose={repose} />
          <ReposeCards repose={repose} />
          <ReposeCards repose={repose} />
        </section>
      </div>
    </main>
  );
};

export default App;
