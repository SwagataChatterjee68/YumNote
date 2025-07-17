
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-[120px] font-extrabold text-red-600 leading-none">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-red-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-red-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
