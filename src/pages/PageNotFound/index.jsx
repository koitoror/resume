import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';

const PageNotFound = () => (
  <div className="NotFoundPage text-center push">
    <h1>404</h1>
    <h2>
      You have upset the balance of the internet. Go back to the&nbsp;
      <Link to="/">VM Mothership!</Link>
    </h2>
    <img src="/assets/images/404.jpg" alt="notfound" />
  </div>
);

export default PageNotFound;
