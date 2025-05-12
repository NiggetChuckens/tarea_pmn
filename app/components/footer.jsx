import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-600 py-4 border-t">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} NiggetChuckens. All rights reserved.</p>
                <div className="flex justify-center space-x-6 mt-2">
                    <a href="/privacy-policy" className="hover:text-gray-800">Privacy Policy</a>
                    <a href="/terms-of-service" className="hover:text-gray-800">Terms of Service</a>
                    <a href="/contact-us" className="hover:text-gray-800">Contact Us</a>
                </div>
            </div>
        </footer>
    );
}