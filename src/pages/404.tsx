import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center p-4">
                <h1 className="text-4xl font-bold text-red-500">404</h1>
                <p className="text-xl text-gray-700">Oops! The page you're looking for could not be found.</p>
                <div className="mt-4">
                    <Link href="/">
                        <a className="text-blue-500 hover:underline">Go back to Home</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Custom404;
