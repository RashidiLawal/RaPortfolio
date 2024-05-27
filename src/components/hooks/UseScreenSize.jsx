"use client"
import React, {useState, useEffect} from 'react'

const UseScreenSize = () => {
    const [screenSize, setScreenSize] = useState();

    useEffect(() => {
        function getScreenSize() {
           return window.innerWidth;
        }

        function handleResize() {
            setScreenSize(getScreenSize());
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return screenSize;

}

export default UseScreenSize;