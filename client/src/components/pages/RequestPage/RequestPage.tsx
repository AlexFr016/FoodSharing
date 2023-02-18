import React from 'react';

export default function RequestPage(): JSX.Element {
  return (
    <div className="conteinyr">
      <div className="upper">
        <div>
          <img>rec creator photo</img>
        </div>
        <div>
            <h1>Name of creator</h1>
            <p>his info</p>
        </div>
      </div>
      <div className="lower">
        Map product cards here
        <div className="prodCard">
          <img>Product photo</img>
          <h2>Prod name</h2>
          <p>Amount</p>
        </div>
      </div>
    </div>
  );
}
