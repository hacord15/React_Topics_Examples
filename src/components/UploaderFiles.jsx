import React, { useState } from 'react';

const UploaderFiles = () => {
  // State to hold the selected image file URL
  const [imagePreview, setImagePreview] = useState(null);

  // Function to handle file selection and generate a preview
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the selected image
    }
  };

  return (
    <div>
      {/* File input to upload the image */}
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {/* Conditionally show the image preview */}
      {imagePreview && (
        <div style={{ marginTop: '20px' }}>
          <h3>Image Preview:</h3>
          <img
            src={imagePreview}
            alt="Uploaded Preview"
            style={{ maxWidth: '300px', height: 'auto' }} // Set image size
          />
        </div>
      )}
    </div>
  );
};

export default UploaderFiles;
