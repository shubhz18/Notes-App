import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Correct import
import { useSelector } from 'react-redux';
import './Home.css'; 

const ViewPaste = () => {
  const [title, setTitle] = useState("");
  const [value, setvalue] = useState("");

  const { id } = useParams();

  const Allpaste = useSelector((state) => state.paste.pastes);

  // Debugging: Log the ID and Allpaste
  // console.log("ID from URL:", id);
  // console.log("All Pastes:", Allpaste);

  // Find the paste with the matching ID
  const paste = Allpaste.find((item) => item.id === id);

  // Handle case where paste is not found
  if (!paste) {
    return <div className="text-lg text-red-500">Paste not found!</div>;
  }

  return (
    <div className="container">
    <input
      type="text"
      placeholder="Enter your title"
      disabled
      value={paste.title}

      className="title-input"
    />
    <textarea
      type="text"
      placeholder="Enter your content"
      disabled
      value={paste.content}
      onChange={(e) => setvalue(e.target.value)}
      rows={30}
      className="content-textarea"
    />
  
  </div>
  );
};

export default ViewPaste;