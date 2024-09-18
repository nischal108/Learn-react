import { useEffect, useState } from 'react'
import './App.css'

interface Box {
  index: number;
  isClicked: boolean;
  isVisible: boolean;
}

const App = () => {
  const boxess: Box[] = [
    { index: 1, isClicked: false, isVisible: true },
    { index: 2, isClicked: false, isVisible: true },
    { index: 3, isClicked: false, isVisible: true },
    { index: 4, isClicked: false, isVisible: true },
    { index: 5, isClicked: false, isVisible: false },
    { index: 6, isClicked: false, isVisible: false },
    { index: 7, isClicked: false, isVisible: true },
    { index: 8, isClicked: false, isVisible: true },
    { index: 9, isClicked: false, isVisible: true }
  ]

  const [boxes, setBoxes] = useState<Box[]>(boxess);
  const [queue, setQueue] = useState<number[]>([]);

  useEffect(() => {
    if (queue.length === 7) {
      for (let i = 0; i < 7; i++) {
        setTimeout(() => {
          setBoxes((prev) => {
            const temp = [...prev];
            temp[queue[i]].isClicked = false; 
            return temp;
          });
          setQueue((prevQueue) => prevQueue.slice(1)); 
        }, 1000 * i);
      }
    }
  }, [queue, queue.length]);

  const handleBoxClick = (index: number) => {
    setBoxes(prev => {
      const temp = [...prev];
      temp[index - 1].isClicked = true;
      setQueue(prevQueue => [...prevQueue, index - 1]); 
      console.log(queue);
      
      return temp;
    });
  }

  return (
    <div className='container'>
      {boxes.map((item) => (
        item.isVisible ? (
          <div className={`box ${item.isClicked ? "green" : "default"}`} key={item.index} onClick={() => handleBoxClick(item.index)}>
            {item.index}
          </div>
        ) : <div key={item.index}></div>
      ))}
    </div>
  )
}

export default App;
