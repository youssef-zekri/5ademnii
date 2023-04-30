import React from 'react';

import { SyncLoader } from 'react-spinners';
const Loading = () => {
  return (
    <div className="spinner-container">
      <SyncLoader color="#36d7d7" />
    </div>
  );
};

export default Loading;
