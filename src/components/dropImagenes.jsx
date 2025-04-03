import React, { useState, useRef } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

import '../styles/dropImagenes.css'; // Aquí irá el estilo

const DropzoneMultiple = () => {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef();

  const handleFiles = files => {
    const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));

    const imagePreviews = imageFiles.map(file => ({
      file,
      url: URL.createObjectURL(file)
    }));

    setImages(prev => [...prev, ...imagePreviews]);
  };

  const handleDrop = e => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleFileChange = e => {
    handleFiles(e.target.files);
  };

  const removeImage = index => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="dropzone-container">
      <div
        className="dropzone"
        onClick={() => fileInputRef.current.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}>
        <input
          type="file"
          multiple
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <div className="dropzone-content">
          <div className="upload-icon">
            <FaCloudUploadAlt />
          </div>
          <p style={{ margin: '0px' }}>Arrastra o haz clic para cargar imágenes</p>
        </div>
      </div>

      {images.length > 0 && (
        <div className="image-preview-container">
          {images.map((img, index) => (
            <div key={index} className="image-wrapper">
              <img src={img.url} alt={`preview-${index}`} />
              <button onClick={() => removeImage(index)}>X</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropzoneMultiple;
