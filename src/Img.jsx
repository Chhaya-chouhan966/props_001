import React from 'react'
import './img.css'


const Img = (props) => {
    return (
        <div className="img">
            <div className="head" style={{ backgroundColor: props.bgc}}></div>
            <div className="color">
                <h3>{props.colorText}</h3>
                <p style={{color:props.color}}>{props.cN}</p>
            </div>
        </div>
    )
}

export default Img;