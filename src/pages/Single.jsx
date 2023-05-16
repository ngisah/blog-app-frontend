import React from 'react'
import Delete from '../img/delete.png'
import {Link} from 'react-router-dom'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src="https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1342&q=80" alt="" />
        <div className="user">
        <img src="https://images.unsplash.com/photo-1608900456338-7cbee0e46390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
        <div className="info">
          <span>Kifee</span>
          <p>Posted 4 days ago</p>
        </div>
        <div className="edit">
          <img src='https://raw.githubusercontent.com/safak/youtube2022/blog-app/client/src/img/edit.png' alt='delete button' />
        </div>
      </div>


      <div className='menu'>menu</div>
    </div>
  )
}

export default Single