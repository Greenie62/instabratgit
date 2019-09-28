import React, {Component} from "react"
import axios from 'axios'
import "./App.css"

import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Modal from "./components/Modal.js"
import ImageGrid from "./components/Image-Grid.js"
import PictureUpload from "./components/PictureUpload.js"
import {FaStar} from "react-icons/fa"
import {FaXing} from "react-icons/fa"




class App extends Component{
  state={
    icon:"logo192.png",
    images:[],
    currentimage:"",
    showmodal:false,
  }


  componentDidMount=()=>{
    axios.get('/test')
    .then(res=>{
      console.log(res)
    })
  }

  addPicture=(picture)=>{
    var images=this.state.images;
    images.push(picture)
    this.setState({images})
  }



  openModal=(img)=>{
    this.setState({currentimage:img,
                   showmodal:true})
  }

  closeModal=()=>{
    this.setState({showmodal:false})
  }


  render(){
    return(
      <div className='app'>
      <Header icon={this.state.icon}/>
      <PictureUpload addPicture={this.addPicture}/>
      <div className='image-container'>
      {this.state.images.length !== 0 ? this.state.images.map(i=>(
        <ImageGrid key={i.name}
                   caption={i.caption}
                   openModal={this.openModal}
                   image={i.path}/>
    
      )): null}
     
      </div>
      <Modal
       showmodal={this.state.showmodal}
       closeModal={this.closeModal}
       image={this.state.currentimage}/>
      <Footer/>
      </div>
    )
  }
}


export default App;