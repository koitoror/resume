import React from 'react';

const SocialIcons = props => (
  <ul {...props}>
    <li>
      <a
        href="https://facebook.com/koitoror/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-facebook" />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/koitoror/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-twitter" />
      </a>
    </li>
    <li>
      <a
        href="https://github.com/koitoror/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-github" />
      </a>
    </li>
    <li>
      <a
        href="https://stackoverflow.com/users/12165525/daniel-kamar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-stack-overflow" />
      </a>
    </li>
    <li>
      <a
        href="https://linkedin.com/in/daniel-kamar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-linkedin" />
      </a>
    </li>
    <li>
      <a
        href="https://medium.com/@koitoror"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-medium" />
      </a>
    </li>
  </ul>
);

export default SocialIcons;
