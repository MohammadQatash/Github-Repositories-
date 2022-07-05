import React from 'react'
import {
  StarsIcon,
  ForksIcon,
  OpenIssuesIcon,
  AgeIcon,
  LastCommitIcon,
  LicenseIcon,
  LanguageIcon
} from "../icons";

const ReposeCards = ({repose}) => {
  return (
    <div className="repository-card">
      <div className="repose-name">
        <div>{repose[0].full_name}</div>
        <img src={repose[0].owner.avatar_url} alt="noImage" />
      </div>
      <div className="repose-stars mt-7">
        <div className="icon-box">
          <span className="icons">
            <StarsIcon />
          </span>
          Stars
        </div>
        <div>{repose[0].stargazers_count}</div>
      </div>
      <div className="repose-forks">
        <div className="icon-box">
          <span className="icons">
            <ForksIcon />
          </span>
          Forks
        </div>
        <div>{repose[0].forks}</div>
      </div>
      <div className="repose-open-issues">
        <div className="icon-box">
          <span className="icons">
            <OpenIssuesIcon />
          </span>
          open issues
        </div>
        <div>{repose[0].open_issues}</div>
      </div>
      <div className="repose-age">
        <div className="icon-box">
          <span className="icons">
            <AgeIcon />
          </span>
          Age
        </div>
        <div>{repose[0].age}</div>
      </div>
      <div className="repose-last-commit">
        <div className="icon-box">
          <span className="icons">
            <LastCommitIcon />
          </span>
          lastCommit
        </div>
        <div>{repose[0].lastCommit}</div>
      </div>
      <div className="repose-license">
        <div className="icon-box">
          <span className="icons">
            <LicenseIcon />
          </span>
          license
        </div>
        <div>{repose[0].license}</div>
      </div>
      <div className="repose-language mb-7">
        <div className="icon-box">
          <span className="icons">
            <LanguageIcon />
          </span>
          Language
        </div>
        <div>{repose[0].language}</div>
      </div>
      <button className="btn-remove">Remove repo</button>
    </div>
  );
}

export default ReposeCards