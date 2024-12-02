import {Component} from 'react'
import './index.css'
import CommentItem from '../CommentItem'
import {v4 as uuidv4 } from 'uuid'

const initialContainerBackgroundClassNames = [
    'amber',
    'blue',
    'orange',
    'emerald',
    'teal',
    'red',
    'light-blue',
  ]
  
  // Write your code here
  class Comments extends Component{
    state={
        name:'',
        comment:'',
        commentsList:[],
        count:0,
        isLiked:false
    }

    toggleLike=(id)=>{
        this.setState(prevState=>(
            {commentsList:prevState.commentsList.map(eachItem=>{
                if(id===eachItem.id){
                    return {...eachItem,isLiked:!eachItem.isLiked}
                }
                return eachItem
            })}
        ))
    }

    deleteComment = (id) => {
        this.setState(prevState => ({
            commentsList: prevState.commentsList.filter(eachItem => id !== eachItem.id),
            count:prevState.commentsList.length-1
        }));
    }
    

    onChangeName = (event)=>{
            
        this.setState({name:event.target.value})
    }

    onChangeComment = (event)=>{

        this.setState({comment:event.target.value})
    }
    onAddComment=(event)=>{
        event.preventDefault()
        const {name,comment}=this.state
        const newComment={
            id:uuidv4(),
            name,
            comment,
            bgColor:initialContainerBackgroundClassNames[Math.floor(Math.random() * initialContainerBackgroundClassNames.length)],
            timestamp: new Date(), 
        }
        this.setState(prevState=>({
            commentsList:[...prevState.commentsList,newComment],
            count:prevState.commentsList.length+1,
            name:'',
            comment:''
        }))
    }

    render(){
        const {name,comment,commentsList,count}=this.state

        return(
            <div className="app-container">
               <div className="responsive-container">
                <h1 className="heading">Comments</h1>
                <div className="form-image-container"> 
                <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" alt="comments" className="img"/>
                <form className="form-container" onSubmit={this.onAddComment}>
                    <label for="name" className="description">Say something about 4.0 Technologies</label>
                    <input type="text" value={name} placeholder="Your Name" onChange={this.onChangeName} id="name" className="input-box" />
                    <textarea rows="7" cols="40" placeholder="Your Comment" value={comment} onChange={this.onChangeComment}  className="input-box"/>
                    <button type="submit" className="btn">Add Comment</button>
                </form>
                </div>
                <hr/>
                <ul className="list-items-container">
                    <li className="count">
                        <p className="count-text">
                            <span>{count}</span> Comments</p> 
                    </li>
                    {commentsList.map(eachItem=>(
                         <CommentItem details={eachItem} key={eachItem.id} toggleLike={this.toggleLike} deleteComment={this.deleteComment} />
                    )  
                    )}
                    
                </ul>
                   

                </div>
            
            </div>
        )
            


    }
  }

  export default Comments

  