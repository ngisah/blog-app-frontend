import React from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Write = () => {
  const state = useLocation().state
  const [value, setValue] = useState('');
  const [ title, setTitle] = useState('');
  const [ file, setfile] = useState(null);

  const navigate = useNavigate()

  const handleClick = async (e) => {

  }
  console.log(value);
  return (
    <div className='add'>
      <div className='content'>
        <input 
          type='text' 
          placeholder='title' />
          onChange = {(e)=>setTitle(e.target.value)}
        <div className="editorContainer">
        <ReactQuill 
          classname='editor' 
          theme="snow" 
          value={value} 
          onChange={setValue} />
        </div>
      </div>
      <div className='menu'>
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> draft
          </span>
          <span>
            <b>Visibility:</b> public
          </span>
          <input style={{display:'none'}} type="file" name='' id='file'/>
          <label className='file' htmlFor='file'>Upload image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className='cat'>
          <input type="radio" name='cat' value='art' id='art'/>
          <label htmlFor='art'>Art</label>
          </div>
          <div className='cat'>
          <input type="radio" name='cat' value='science' id='science'/>
          <label htmlFor='science'>Science</label>
          </div>
          <div className='cat'>
          <input type="radio" name='cat' value='technology' id='technology'/>
          <label htmlFor='technology'>Technology</label>
          </div>
          <div className='cat'>
          <input type="radio" name='cat' value='film' id='film'/>
          <label htmlFor='film'>Film</label>
          </div>
          <div className='cat'>
          <input type="radio" name='cat' value='fashion' id='fashion'/>
          <label htmlFor='fashion'>Fashion</label>
          </div>
          <div className='cat'>
          <input type="radio" name='cat' value='food' id='food'/>
          <label htmlFor='food'>Food</label>
         </div> 
        </div>
      </div>
    </div>
  )
}

export default Write