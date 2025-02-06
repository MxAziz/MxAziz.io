import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#384143] text-white">
      <h1 className="text-7xl font-bold text-gray-300">404</h1>
      <p className="text-xl mt-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-[#276472] text-white rounded-lg shadow-md hover:bg-[#0e3c46] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
