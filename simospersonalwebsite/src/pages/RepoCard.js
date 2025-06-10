// components/RepoCard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import './css/RepoCard.css';

function RepoCard({ owner, repo }) {
  return (
    <div className="repo-card-container">
        <a href={`https://github.com/${owner}/${repo}`} target="_blank" rel="noopener noreferrer">
          <img src={`https://gh-card.dev/repos/${owner}/${repo}.svg`} alt={`${repo} GitHub card`} />
        </a>
    </div>
  );
}

export default RepoCard;