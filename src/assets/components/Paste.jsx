import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPastes } from '../../redux/pasteslice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faCopy, faShareSquare, faEye } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './paste.css'; 

const Paste = () => {
  const [search, setsearch] = useState('');
  const pastes = useSelector((state) => {
    return state.paste.pastes;
  });

  // Filter data based on search
  const filterData = pastes.filter((paste) => {
    return paste.title.toLowerCase().includes(search.toLowerCase());
  });
  
  const dispatch = useDispatch();

  // Function to handle deletion
  function handleDelete(pasteid) {
    dispatch(removeFromPastes(pasteid));
  }

  // Debugging function to check pasteid
  function check(pasteid) {
    console.log(pasteid);
  }

  return (
    <div className="container">
      <input 
        type="text" 
        className='title-input' 
        placeholder='Search your notes here' 
        value={search} 
        onChange={(e) => setsearch(e.target.value)}
      />
      <div>
        {filterData.length > 0 &&
          filterData.map((paste) => {
            return (
              <div className='EachBox' key={paste?.id}>
                <div className='head'>
                  {paste.title}
                  <div className='allBt'>
                    <button>
                      <NavLink to={`/?paramsId=${paste?.id}`}>
                        <FontAwesomeIcon icon={faEdit} className='icon'/>
                      </NavLink>
                    </button>
                    <button onClick={() => handleDelete(paste?.id)}>
                      <FontAwesomeIcon icon={faTrashAlt} className='icon'/>
                    </button>
                    <button onClick={() => { navigator.clipboard.writeText(paste?.content); }}>
                      <FontAwesomeIcon icon={faCopy} className='icon'/>
                    </button>
                    <button>
                      <NavLink to={`/pastes/${paste?.id}`}>
                        <FontAwesomeIcon icon={faEye} className='icon'/>
                      </NavLink>
                    </button>
                  </div>
                </div>
                <div className='content'>{paste.content}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
