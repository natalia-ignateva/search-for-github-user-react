import React from 'react';

const Card = (props) => {
  return (
    <div>
      <div>
        <img src={props.avatar_url} alt="" />
      </div>
      <div>
        <h3>
          {props.name}
          {props.login}
        </h3>
        <p>
          {props.public_repos} repositiries. User since{' '}
          {props.created_at.slice(0, 4)}
        </p>
        <p>{props.location || ''}</p>
        <p>{props.bio || ''}</p>
      </div>
      <div>
        <a href={props.html_url}>
          <button>Profile</button>
        </a>
        <a href={props.blog}>
          <button>Website</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
