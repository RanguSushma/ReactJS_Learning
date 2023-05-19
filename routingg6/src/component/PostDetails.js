import React from "react";
import { useParams,useSearchParams } from "react-router-dom";

const PostDetail = (props) => {
    let params = useParams();
    let [searchParams] = useSearchParams();
    return (
        <div className="card">
            <div className="card-header">
               {params.topic}
            </div>
            <div className="card-body">
                <h5 className="card-title">{params.topic} </h5>
                <p calssName="card-text">{params.topic} supporting text below as a natural lead-in to additional content.</p>
                <h4>You are on page number {searchParams.getAll('page')}</h4>
            </div>
        </div>
    )
}
export default PostDetail;