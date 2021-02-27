import React from 'react'
import './App.css';


function ColorBox(props) {
    const styles = {
        backgroundColor: props.backgroundColor
    }
    return (
        <div style ={styles}>
            <h1>{props.box.title}</h1>
            <h3>{props.box.subtitle}</h3>
            <p>{props.box.info}</p>
        </div>
    )
}

export default ColorBox 