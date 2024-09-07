"use client"
import Image from 'next/image';
import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex  justify-center mt-12">
            <Image
                src="https://cdn.presslabs.com/wp-content/uploads/2018/03/custom-error-pages.png"
                width={500}
                height={500}
                alt="not found page"
            />
        </div>
    );
};

export default ErrorPage;