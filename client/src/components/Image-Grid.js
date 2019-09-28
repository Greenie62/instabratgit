import React from "react"
import {FaXing} from "react-icons/fa"

import {FaStar} from "react-icons/fa"


const ImageGrid = (props) =>{




   const highlightStar=(e)=>{
        // console.log(e.target.getAttribute('value'))
        // var value=e.target.getAttribute('value')
        // var stars=document.querySelectorAll('.star');
        // stars.forEach(s=>{
        //   s.style.backgroundColor="white"
        // })
        // for(var i=0;i<=value;i++){
        //   stars[i].style.backgroundColor="yellow"
        // }
        console.log(e.target.parentElement.children)
        Array.from(e.target.parentElement.children).forEach((s,index)=>{
            s.style.backgroundColor='white'
            for(var i=0;i<=e.target.getAttribute("value");i++){
                Array.from(e.target.parentElement.children)[i].style.backgroundColor='yellow'
            }
        })
      }


    return(

    <div className="image-div">
    <img className="user-image" src={props.image} alt={props.image}/>
    <div className='stars'>
    <div onMouseEnter={highlightStar} value="0" className='star'><FaStar/></div>
    <div onMouseEnter={highlightStar} value="1" className='star'><FaStar/></div>
    <div onMouseEnter={highlightStar} value="2" className='star'><FaStar/></div>
    <div onMouseEnter={highlightStar} value="3" className='star'><FaStar/></div>
    </div>
    <div className='caption-delete-div'>
    <h3>{props.caption}</h3>
    <button className="open-modal-btn" onClick={()=>props.openModal(props.image)}>Check-Out</button>
    <span className='delete-span' data-name={props.image}><FaXing/></span>
    </div>
    </div>
)
}

export default ImageGrid;