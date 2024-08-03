import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [upload, setUpload] = useState(null);
  const [image, setImage] = useState(null);

  const handleUpload = (e) => {
    const formData = new FormData();
    formData.append("file", upload);
    axios.post("http://localhost:3000/upload", formData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios.get("http://localhost:3000/getImage")
      .then(res => setImage(res.data[0].image))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <input type="file" onChange={e => setUpload(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      {image && <img src={`http://localhost:3000/Images/${image}`} alt="Uploaded" />}
    </div>
  );
}
