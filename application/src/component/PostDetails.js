import React from "react";
import { useParams } from "react-router-dom";

const PostDetail = (props) => {
    console.log(props)
    return (
        <div className="card">
            <div className="card-header">
               {props.match.params.topic}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.match.params.topic} </h5>
                <p calssName="card-text">{props.match.params.topic}l supporting text below as a natural lead-in to additional content.</p>
                <h4>You are on page number {props.location.search.split('=')[1]}</h4>
            </div>
        </div>
    )
}
export default PostDetail;