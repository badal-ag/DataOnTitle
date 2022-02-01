import React, { useEffect, useState } from 'react';
import './style.css';

export default function UseEffect() {

    const [myNum, setMyNum] = useState(0);

    useEffect(() => {
        document.title = `Click Number(${myNum})`;
    } );

    return <>
        <div className='center_div'>
            <p>{myNum}</p>
            <div className='button2' onClick={() => setMyNum(myNum + 1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCREASE
            </div>     
        </div>
    </>;
}
