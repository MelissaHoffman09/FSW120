import React from "react"

let BlogProps = (props) => {
    return (
        <div className="propBox">
            <p className="propTitle">{props.title}</p>
            <p className="propsubTitle">{props.subTitle}</p>
            <p className="authors">Posted by <span className="authorName">{props.author}</span> {props.date}</p>
            <hr></hr>
        </div>
    )
} 

export default BlogProps;