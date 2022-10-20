import './App.scss';
import CardBlock from './components/CardBlock';
import { cardData } from './components/data';




function App() {


  return (
    <div className='App'>
      <div className='container'>
        {cardData.map((data) =>
          <CardBlock
            textHour={data.timeText}
            title={data.title}
            items={data.items}
            times={data.times}
            label={data.new}
            img={data.img} />
        )}
      </div>
    </div>
  )

}

export default App;
