export default function Footer() {
    return (
        <footer className="bg-white py-6 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-sm text-black text-center">
                    &copy; {new Date().getFullYear()} Abdul Majeed. All rights reserved.
                </p>
            </div>
        </footer>
    );
}