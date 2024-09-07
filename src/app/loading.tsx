import Image from 'next/image';
import React from 'react';

const LoadingPage = () => {
    return (
        <div className="flex  justify-center mt-12">
            <Image
                src="https://img.freepik.com/premium-photo/neon-pink-loading-text-with-circular-progress-bar-black-background_824086-3734.jpg"
                width={500}
                height={500}
                alt="not found page"
            />
        </div>
    );
};

export default LoadingPage;