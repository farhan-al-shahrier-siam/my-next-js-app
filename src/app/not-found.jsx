import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="text-center px-6">
                <h1 className="text-7xl font-extrabold text-gray-800 dark:text-white mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-4">Page Not Found</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">The page you are looking for doesn’t exist or has been moved.</p>

                <Link href="/">
                    <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-lg transition-all duration-300">Go Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
