import React from 'react'

const Menu = () => {
    const posts = [
        {
          "id": "1",
          "title": "lorem Ipsum",
          "desc": "This is sample data #1",
          "img": "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1342&q=80"
      },
      {
        "id": "2",
        "title": "lorem Ipsum",
        "desc": "This is sample data #1",
        "img": "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1342&q=80"
    },
    {
      "id": "3",
      "title": "lorem Ipsum",
      "desc": "This is sample data #1",
      "img": "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1342&q=80"
    },
    {
      "id": "4",
      "title": "lorem Ipsum",
      "desc": "This is sample data #1",
      "img": "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1342&q=80"
    },
    {
      "id": "5",
      "title": "lorem Ipsum",
      "desc": "This is sample data #1",
      "img": "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1342&q=80"
    },
    
      ];
  return (
    <div className='menu'>
        <h1>
            Other posts you may like
        </h1>
        {posts.map(post=>(
            <div className='post' key={post.id}>
                <img src={post.img} alt=''/>
                <h2>{post.title}</h2>
                <button>read more</button>
            </div>
        ))}
    </div>
  )
}

export default Menu