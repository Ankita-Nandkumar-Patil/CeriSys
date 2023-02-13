import React from 'react';

const Certificate = props => {
  return (
    <div className="certificate">
      <h1>Certificate of Completion</h1>
      <h2>This certificate is presented to</h2>
      <h3>{props.fname}</h3>
      <h4>for successfully completing the course</h4>
      <h5>{props.cert}</h5>
      <h5>Given by Organization :</h5>
      <h4>{props.org}</h4>

      <h6>Issuing date:</h6>
      <h6>{props.idate}</h6>

      <h6>Expiry  date:</h6>
      <h6>{props.vdate}</h6>

      <h6>Email id:</h6>
      <h6>{props.email}</h6>

      
    </div>
  );
};

export default Certificate;