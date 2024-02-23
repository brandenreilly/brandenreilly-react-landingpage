import React from "react";
import PropTypes from 'prop-types';

const CardTest = (props) => {
        return(
                <div className="col-sm card cardStyling mx-3" >
                    <img src={props.imgURL} className="card-img-top" alt="card img top"></img>
                    <div className="card-body" style={{backgroundColor:`${props.color}`, border:`${props.borderColor}`}}>
                        <h5 className="card-title d-flex justify-content-center">{props.title}</h5>
                        <p className="card-text d-flex text-center">{props.text}</p>
                    </div>
                    <div className="card-footer cardFooterStyling d-flex justify-content-center">   
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
        )
}  
CardTest.propTypes = {
    imgURL: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    color: PropTypes.string,
    borderColor: PropTypes.string
} 

export default CardTest