import React from "react";
import { Link } from "react-router-dom";
const Post = () => {
    return (
        <div className="card">
            <div className="card-header">
                Post Page
            </div>
            <div className="card-body">
                <h5 className="card-title">Post Page </h5>
                <p calssName="card-text">Post supporting text below as a natural lead-in to additional content.</p>
                <h3>Java</h3>
                <Link to='/post/java?page=1' className="btn btn-primary">Deatils</Link>
                <h3>JavaScript</h3>
                <Link to='/post/javascript?page=2' className="btn btn-success">Details</Link>
                <h3>Node</h3>
                <Link to='/post/Node?page=3' className="btn btn-danger">Details</Link>
            </div>
           
        </div>
    )
}
export default Post;