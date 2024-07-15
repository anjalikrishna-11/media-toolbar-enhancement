import React from 'react';

const UploadButton = () => {
  const handleUpload = () => {
    alert('Uploading image...');
    // Add your image upload logic here
  };

  return <button onClick={handleUpload}>Upload Image</button>;
};

export default UploadButton;
