import React, { Component } from 'react';
import { Link } from "react-router-dom";



class UserDetailView extends Component {

    

    render() {
        return (
            <div>
                <div>
                    <h3>User ID: </h3>
                    <Link to={`/users`}>Back to catalog</Link>
                </div>

            </div>
        )
    }

}

export default UserDetailView;
