import React from "react";

function mainBlock(props) {
    return (
        <div className="blocks">
            <img src={props.image} alt="Иконка" className="blocks_images" />
            <h3>{props.title}</h3>
            <p className="images_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
        </div>
    );
}

export default mainBlock;