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

const ReposeCards = ({
  full_name,
  stargazers_count,
  forks,
  open_issues,
  language,
  license,
  created_at,
  updated_at,
  owner,
}) => {
  function GetDate(time) {
    const arrDate = [];
    const created = new Date(time);
    const now = new Date();
    const totalSeconds = (now.getTime() - created.getTime()) / 1000;

    const years = Math.floor(totalSeconds / 3600 / 24 / 30 / 12);
    const months = Math.floor(totalSeconds / 3600 / 24 / 30);
    const days = Math.floor(totalSeconds / 3600 / 24) % 30;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    
    arrDate.push(`${years} years ago`);
    arrDate.push(`${months} months ago`);
    arrDate.push(`${days} days ago`);
    arrDate.push(`${hours} hours ago`);
    arrDate.push(`${mins} mins ago`);
    
    const age = arrDate.find(date => {
      return parseInt(date) > 0;
    });
    return age;
  }

  return (
    <div className="repository-card">
      <div className="repose-name">
        <div>{full_name}</div>
        <img src={owner.avatar_url} alt="noImage" />
      </div>
      <div className="repose-stars mt-7">
        <div className="icon-box">
          <span className="icons">
            <StarsIcon />
          </span>
          Stars
        </div>
        <div>{stargazers_count.toLocaleString("en-US")}</div>
      </div>
      <div className="repose-forks">
        <div className="icon-box">
          <span className="icons">
            <ForksIcon />
          </span>
          Forks
        </div>
        <div>{forks.toLocaleString("en-US")}</div>
      </div>
      <div className="repose-open-issues">
        <div className="icon-box">
          <span className="icons">
            <OpenIssuesIcon />
          </span>
          open issues
        </div>
        <div>{open_issues}</div>
      </div>
      <div className="repose-age">
        <div className="icon-box">
          <span className="icons">
            <AgeIcon />
          </span>
          Age
        </div>
        <div>{GetDate(created_at)}</div>
      </div>
      <div className="repose-last-commit">
        <div className="icon-box">
          <span className="icons">
            <LastCommitIcon />
          </span>
          lastCommit
        </div>
        <div>{GetDate(updated_at)}</div>
      </div>
      <div className="repose-license">
        <div className="icon-box">
          <span className="icons">
            <LicenseIcon />
          </span>
          license
        </div>
        <div>{license !== null ? license.spdx_id : "null"}</div>
      </div>
      <div className="repose-language mb-7">
        <div className="icon-box">
          <span className="icons">
            <LanguageIcon />
          </span>
          Language
        </div>
        <div>{language ? language : 'null'}</div>
      </div>
      <button className="btn-remove">Remove repo</button>
    </div>
  );
};

export default ReposeCards