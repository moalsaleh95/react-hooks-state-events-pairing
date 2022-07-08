import React from 'react';
import video from './video';

function BottomHalf({toggler}) {
  return (
    <div>
        <h3>{video.comments.length} Comments</h3>
        {video.comments.map(comment => {
            return (
                <>
                    {toggler ? 
                    <div key={comment.id}>
                        <h4>{comment.user}</h4>
                        <p>{comment.comment}</p>
                    </div>
                    
                    : null}
                </>
                
            )
        })}
    </div>
  )
}

export default BottomHalf