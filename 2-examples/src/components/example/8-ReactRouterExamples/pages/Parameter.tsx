import React from 'react';
import { useParams } from 'react-router-dom';

function Parameter() {
  let params = useParams();
  console.log(params);
  return <div>Parameter</div>;
}

export default Parameter;
