import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addtoPastes, UpdateToPastes } from '../../redux/pasteslice';
import './Home.css'; // Import the CSS file
import { toast } from 'react-toastify';

const Home = () => {
  const [title, setTitle] = useState('');
  const [params, Searchparams] = useSearchParams();
  const [value, setvalue] = useState('');
  const dispatch = useDispatch();
  const paramsId = params.get('paramsId');
  const allpaste = useSelector((state) => state.paste.pastes);


  useEffect(() => {
    if (paramsId) {
      const para = allpaste.find((p) => p.id === paramsId);
      if (para !== null && para !== undefined) {
        setTitle(para.title);
        setvalue(para.content);
      } else {
        setTitle('');
        setvalue('');
      }
    } else {
      setTitle('');
      setvalue('');
    }
  }, [paramsId, allpaste]);

  function CreatePaste() {
    if (title.length === 0 || value.length === 0) {
      toast("Both fields are mandantory")
      return; // Stop further execution
    }
    const paste = {
      title: title,
      content: value,
      id: paramsId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (paramsId) {

      dispatch(UpdateToPastes(paste));
    } else {
    
      dispatch(addtoPastes(paste));
    }
  
    setTitle('');
    setvalue('');
    Searchparams({});
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter your title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="title-input"
      />
      <textarea
        type="text"
        placeholder="Enter your content"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        rows={30}
        className="content-textarea"
      />
      <button onClick={CreatePaste} className="submit-button">
        {paramsId ? 'Update Paste' : 'Create Paste'}
      </button>
    </div>
  );
};

export default Home;