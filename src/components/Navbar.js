import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
export default function Navbar() {
  return (
    <body class="bg-dark bg-gradient">
      <header
        id="nav"
        className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
      >
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <svg
            className="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          >
            {/* <use xlink:href="#bootstrap"></use> */}
          </svg>
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/" class="nav-link px-2 link-light">
              Home
            </a>
          </li>
          <li>
            <a href="/Generate" class="nav-link px-2 link-light">
              Generate
            </a>
          </li>
          <li>
            <a href="/Verify" class="nav-link px-2 link-light">
              Verify
            </a>
          </li>
          <li>
            <a href="/View" class="nav-link px-2 link-light">
              View
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <a href="/Signup">
            <button type="button" class="btn btn-outline-light me-2">
              Sign-up
            </button>
          </a>
          <a href="/Login">
            <button type="button" class="btn btn-outline-light me-2">
              Login
            </button>
          </a>
        </div>
      </header>
    </body>
  );
}
