import React from 'react'
import Delete from '../img/delete.png'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  
  return (
    <div className='single'>
      <div className='content'>
        <img src="https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1342&q=80" alt="" />
        <div className="user-info">
        <img src="https://images.unsplash.com/photo-1608900456338-7cbee0e46390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        <div className="info">
          <span>Kifee</span>
          <p>Posted 4 days ago</p>
        </div>
        <div className="edit">
          <Link to={`/write?/edit=1`}>
          <img src='https://raw.githubusercontent.com/safak/youtube2022/blog-app/client/src/img/edit.png' alt='delete button' />
          
          </Link>
          <img src={Delete} alt='delete'/>
          
        </div>
        
        
        
        </div>
        <h1>What is Lorem Ipsum?</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
      </div>
      <Menu />

    </div>
  )
}

export default Single