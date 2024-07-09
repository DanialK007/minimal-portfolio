import React, {useState, useEffect} from 'react'

function UseMousePosition() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const updateMousePosition = (e) => {
        setMousePosition({x: e.clientX, y: e.clientY})
    }

    useEffect(() => {
        document.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

  return mousePosition;
}

export default UseMousePosition
