import React, { useEffect, useRef } from 'react'

const List = ({ reposeList, addToRepos, show }) => {
  const ref = useRef(null);

  useEffect(() => {
    if(show) {
      ref.current.className = 'heddin'
    } else {
      ref.current.className = "container-list";
    }
  }, [show])

  return (
    <div className="container-list" ref={ref}>
      <ul className="list">
        {reposeList.map((repo) => {
          const { name, owner } = repo;
          return (
            <li
              key={repo.id}
              className="item-list"
              onClick={() => {
                addToRepos(repo);
              }}
            >
              <img src={owner.avatar_url} alt="noImage" />
              <div>{name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List