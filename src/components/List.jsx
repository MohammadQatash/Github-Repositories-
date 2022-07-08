import React from 'react'

const List = ({ reposeList, addToRepos }) => {
  return (
      <div className='container-list'>
          <ul className='list'>
        {reposeList.map((repo) => {
            const {name, owner} = repo;
            return (
              <li key={repo.id} className="item-list" onClick={() => {addToRepos(repo)}}>
                <img src={owner.avatar_url} alt="noImage" />
                <div>{name}</div>
              </li>
            );
        })}
        </ul>
      </div>
  )
};

export default List