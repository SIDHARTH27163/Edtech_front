import React, { useState, useEffect } from 'react';

function Warning_alerts(props) {
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
                   <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-200 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Danger alert!</span> {props.text}.
</div>
                </div>
            )}
        </>
    );
}

export default Warning_alerts;
