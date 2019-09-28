import React, {Component} from "react";
import axios from "axios"
import { FaInstagram } from 'react-icons/fa';



class PictureUpload extends Component{
    state={
        caption:""
    }

    upload=(e)=>{
        console.log(e.target.files)
        var file=e.target.files[0];
        var formData=new FormData;
        formData.append("file", file);

        axios.post('/upload',formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        .then(res=>{
            console.log(res)
            var image={
                name:res.data.filename,
                path:res.data.filePath,
                caption:this.state.caption
            }
            console.log(image)
            this.props.addPicture(image)
        })

    }

    onStateChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }


    render(){

    return(
    <div className="picture-upload-row">
 
 <h1>Upload</h1>
 <label htmlFor="caption">GIVE A WITTY CAPTION:</label>
 <input type="text" id="caption" name="caption" value={this.state.caption} onChange={this.onStateChange} placeholder="enter a caption..." autoComplete="off"/>
 <button className="upload-pic-btn" onClick={()=>this.fileupload.click()}><FaInstagram/></button>
 
     <input style={{display:'none'}} onChange={(e)=>this.upload(e)} type='file' id='file' ref={fileupload=>this.fileupload = fileupload}/>
        </div>
    )
}
    }


export default PictureUpload;