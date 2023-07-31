import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Child from './child';
import CustomHooks from './custom-hooks';
export default function HooksPage() {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        console.log("useEffect - chạy 1 lần duy nhất nếu đối số thứ 2 là mảng rỗng - tương đương componentDidMount bên class");
    }, []);

    useEffect(() => {
        console.log("useEffect - tương đương componentDidUpdate bên class - chạy lại khi mảng khác rỗng");
    }, [number]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Hellooooooooooooo");
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [])

    //Re-render
    const countUp = () => {
        let i = 0;
        while (i < 1000) {
            i++
        }
        console.log(i);
        return i;
    }
    const countUpMemo = useMemo(() => countUp(), []);


    const renderNoti = () => {
        console.log("renderMoti");
    }

    const renderNotiCallback = useCallback(renderNoti, []);
    return (
        <div>
            <h3>Number: {number}</h3>
            <h3>Number Up: {countUpMemo}</h3>
            <button className='btn btn-my-custom' onClick={() => {
                setNumber(number + 1);
            }}>Click</button>
            <hr />
            <Child renderNoti={renderNotiCallback} />
            <CustomHooks />
        </div>

    )
}
