import React, {Component} from "react"



class Modal extends Component{
    state={
        comment:"",
        comments:[],
    }

    onStateChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    enterMessage=()=>{
        var comments=this.state.comments;
        comments.push(this.state.comment);
        this.setState({comments:comments,
                       comment:""})
    }

    closeModal=()=>{
       
        this.props.closeModal()
    }



    render(){
        return(
    
    <div style={{display:this.props.showmodal ? "block" : "none"}} className='image-modal'>
    <div className='image-modal-div'>
    <img className='modal-img' src={this.props.image} alt="image"/>
    </div>
    <div className='comments-reactions-div'>
    
    
    <span onClick={this.closeModal} className='delete-span'>&times;</span>
    <label htmlFor="post_comment"><h3>Post a comment:</h3></label>
    <input type='text' name="comment" value={this.state.comment} placeholder="got a comment?!" autoComplete="off" onChange={this.onStateChange}/>
    <button onClick={this.enterMessage} className="enter-comment">Post</button>
    <ul className='comment-list'>
    {this.state.comments.map(c=>(
    <li className='comment-item'>{c}</li>
))}
</ul>
</div>


    </div>
)
    }
}

export default Modal;