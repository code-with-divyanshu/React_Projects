import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import "./style.css";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("code-with-divyanshu");
  const [userData, setUserData] = useState(null);

  async function fetchGithubUserData() {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (data) {
      setUserData(data);
      setUserName("");
      console.log(data);
    }
  }

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-user"
          placeholder="Search Github User"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <UserCard user={userData} /> : null}
    </div>
  );
}
