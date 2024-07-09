import React from "react";

export default function UserCard({ user }) {
  const {
    avatar_url,
    bio,
    name,
    login,
    followers,
    following,
    public_repos,
    created_at,
  } = user;

  const joinedDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="User" className="avatar" />
      </div>
      <div className="content-github">
        <div>
          <a href={`https://github.com/${login}`} target="_blank">
            @{name || login}
          </a>
          <div className="bio">{bio}</div>
          <p>
            User Joined On :{" "}
            {`${joinedDate.getDate()}/${joinedDate.toLocaleString("en-us", {
              month: "short",
            })}/${joinedDate.getFullYear()}`}
          </p>
        </div>
        <div>
          <p>Public Repos: {public_repos}</p>
        </div>
        <div>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
        </div>
      </div>
    </div>
  );
}
