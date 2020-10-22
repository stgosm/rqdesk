import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AUTH_TOKEN } from '../components/Constants';

function Header() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="">
        <div className="">
            <div className="">RQdesk</div>
                <Link to="/" className="">
                    new
                </Link>
            {authToken && (
                <div className="">
                    <Link to="/create" className="">
                        submit
                    </Link>
                </div>
            )}
        </div>
        <div className="">
            {authToken ? (
                <div
                className=""
                onClick={() => {
                    localStorage.removeItem(AUTH_TOKEN)
                    this.props.history.push(`/`)
                }}
                >
                logout
                </div>
            ) : (
                <Link to="/login" className="">
                    login
                </Link>
            )}
        </div>
      </div>
    )
}

export default Header;