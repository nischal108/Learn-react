import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-title">Oops! Something went wrong.</h1>
        <p className="error-message">Sorry, an unexpected error has occurred.</p>
        <p className="error-details">{err?.message || "No details available."}</p>
        <Link to="/" className="error-home-link">Go To Home Page</Link>
      </div>
    </div>
  );
}

export default Error;
