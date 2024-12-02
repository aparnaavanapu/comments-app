import './index.css'
import {formatDistanceToNow} from 'date-fns'



const CommentItem=(props)=>{

    const {details,toggleLike,deleteComment}=props
    const {id,name,comment,isLiked,bgColor,timestamp}=details
    const onClickLike=()=>{
        toggleLike(id)
    }
    const handleClick=()=>{
        deleteComment(id)
    }

    const imgUrl=isLiked?'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png':'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png';
    const likedText=isLiked?'liked-text':'';
    return(
        <li className="list-item">
            <div className="details">
              <div className={`logo ${bgColor}`}>
                 {name[0]}
               </div> 
               <div>
                  <div className="name-timeStamp">
                  <h1 className="name">{name}</h1>
                  <p className="timestamp">{formatDistanceToNow(new Date(timestamp), { addSuffix: true })}</p>
                  </div>
                  <p className="comment">{comment}</p>
                </div>

            </div>
           
            <div className="icons-container">
                <div className="like-container">
                <button onClick={onClickLike} className="like-btn"><img src={imgUrl} alt="like" className="icon"/></button>
                <p className={`like ${likedText}`}>Like</p>
                </div>
                    <div>
                        <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"  className="icon" alt="delete" onClick={handleClick}/>
                    </div>
            </div>
            <hr/>
        </li>
    )
}

export default CommentItem