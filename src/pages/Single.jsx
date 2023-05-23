import React, { useState, useEffect} from 'react'
import Delete from '../img/delete.png'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import Menu from '../components/Menu'
import { useState } from 'react'
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async ()=>{
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }



  
  return (
    <div className='single'>
      <div className='content'>
        <img src={`../upload/${post?.img}`}  alt="" />
        <div className="user-info">
        {post.userImg && <img
            src={post.userImg}
            alt=""
          />}
        <div className="info">
          <span>Kifee</span>
          <p>Posted 4 days ago</p>
        </div>
        <div className="edit">
          <Link to={`/write?/edit=1`}>
          <img src='https://raw.githubusercontent.com/safak/youtube2022/blog-app/client/src/img/edit.png' alt='delete button' />
          
          </Link>
          <img onClick={handleDelete} src={Delete} alt='delete'/>
          
        </div>
        
        
        
        </div>
        <h1>{post.title}</h1>
        <p> dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}</p>
        
      </div>
      <Menu cat={post.cat}/>

    </div>
  )
}

export default Single