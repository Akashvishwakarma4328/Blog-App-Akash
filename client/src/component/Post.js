import React from 'react'

const Post = () => {
    return (
        <div>
            <div className="post">
                <div className="image">
                    <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
                </div>
                <div className="texts">
                    <h2>Akash 1 blog</h2>
                    <p className="info">
                        <span className="author">Akash Vsihwakarma</span>
                        <time> 26/06/2023</time>
                    </p>
                    <p className="summary">Thsi is nature  </p>
                </div>
            </div>
        </div>
    )
}

export default Post