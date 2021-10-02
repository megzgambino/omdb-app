import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
                <h1 className="navbar-brand">
                    OMDB App
                </h1>

                <div className="navbar-nav">
                    <Link
                        className="nav-item nav-link"
                        style={{
                            fontWeight: 'bolder',
                        }}
                        to="/"
                    >
                        HOME
                    </Link>
                </div>
            </nav>
        </div>
    )
}
