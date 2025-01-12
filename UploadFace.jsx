import React, { useState } from 'react';
import axios from 'axios';

const UploadFace = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload-face', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <div>
      <h2>Upload Face</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default UploadFace;
