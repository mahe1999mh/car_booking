import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>

        <section className="flex justify-center items-center mt-32">
            
            <div>
            <h1 className="text-xl md:text-2xl lg:text-7xl text-red-600">404 Not Found</h1>

            <p className="text-center mt-8 lg:text-xl">oops ! Not found data on this route</p>

            <Link to='/' className="mt-7 block text-center underline text-blue-500">Go Home</Link>

            </div>

        </section>
        
    </div>
    );
};

export default ErrorPage;