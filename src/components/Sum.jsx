

export function Sum (props) {

    const cost = '900';
    const costOnPort = '1200'

   
    return (
            <div className="sum">
                <div className='sum__cost'>
                    {cost} 
                 </div>
                <div className='sum__costOnPort'>
                    {costOnPort} р на причале
                </div>
            </div>
    )
}