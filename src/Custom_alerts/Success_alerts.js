import React, { useState, useEffect } from 'react';

function Success_alerts(props) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000); // Hide after 10 seconds

        return () => clearTimeout(timer);
    }, []); // Run once on component mount

    return (
        <>
            {isVisible && (
                <div className='my-1 p-2'>
                    <div className="p-4 mb-1 font-Raleway text-sm text-blue-800 rounded-lg bg-blue-200 dark:bg-gray-800 dark:text-blue-400" role="alert">
                        <span className="font-medium">Info alert!</span> {props.text}
                    </div>
                </div>
            )}
        </>
    );
}

export default Success_alerts;
