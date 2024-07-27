import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-700 mb-2">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-gray-500 mb-4">
          {err?.message || "No details available."}
        </p>
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Go To Home Page
        </Link>
      </div>
    </div>
  );
}

export default Error;
