
import React from 'react';
import './index.css'
import { useRef, useEffect } from 'react';
function Popup(props) {
    
    useEffect(() => {
        let handler = (event) =>{
            if (!optionRef.current.contains(event.target)){
                props.setTrigger(false);
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    });
    const optionRef = useRef();
    return (props.trigger) ? (
        <div className="Popup" >
            <div className="PopupInner" ref={optionRef} >
                {props.children}
            </div>
        </div>
    ) : 
    <div ref={optionRef}></div>
    ;
}   

export default Popup