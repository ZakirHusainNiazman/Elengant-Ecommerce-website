import { Link } from "react-router-dom";

import errorImage from "../assets/home-images/error-logo.svg";

export default function ErrorPage() {
    return (
      <div className="error-page-con">
        <img src={errorImage} alt="404 Error image" className="error-logo" />
        <div className="error-page-content">
          <h1 className="error-page-title">Page not found</h1>
          <p className="error-page-body">
            Something went wrong. It’s look that your requested could not be
            found. It’s look like the link is broken or the page is removed.
          </p>
          <Link to="/">Go to home</Link>
        </div>
      </div>
    );
}
