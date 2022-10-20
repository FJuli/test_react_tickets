import '../App.scss';
import '../components/data';
import useMeasure from 'react-use-measure'
import { Sum } from './Sum';
import { useEffect } from 'react';
import { useState } from 'react';



function CardBlock({
    textHour,
    title,
    items,
    times,
    label,
    img,
}) {
    const sale = 'АКЦИЯ - ';
    const className = `img + ' ' + ${label}`

    const [lastChildlist, setLastChildlist] = useState([])

    const [ref, { x, width, }] = useMeasure();

    const maxTime = Math.floor(x > 106 ? ((width - (12 + 40 + 210)) / 66) : (width / 80));

    useEffect(() => {
        const list = document.querySelectorAll('.list');
        const lastChildlist = list[maxTime - 1];
        setLastChildlist(lastChildlist)
    }, [maxTime])




    return (
        <div className="card" >
            <div className={className}
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + img})`,
                }}>
            </div>
            <div className="contant" >
                <div className='contant__wrapper'>
                    <div className="contant__time"> {textHour}</div>
                    <div className="contant__title"> <span>{sale}</span>{title}</div>
                </div>
                <ul className="contant__items">
                    {items.map((item) =>
                        <li className='item' ref={ref}> {item} </li>)}
                </ul>
                <div className="contant__timeBlocks">
                    <ul>
                        {times.slice(0, maxTime).map((time) =>
                            <li className='item list'> {time} </li>
                        )}
                    </ul>
                </div>
                <div className="opinion">
                    <Sum />
                    <div className="moreBtn"> Подробнее </div>
                </div>
                <div >

                </div>
            </div>
        </div >
    )
}

export default CardBlock