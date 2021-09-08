import {useState} from 'react'
import './App.css';

function App() {
  const arr =['Huyền','Hoa','Hùng','Long']
  const [count, setCount] = useState(0)
  const itemShow = arr.filter((item,index)=>{
    if(index===count){
      return item;
    }
  })
  const nextshow = () =>{
    var a = count + 1;
    if(a>3){
      a = 0;
      setCount(a);
    }
    setCount(a);
  }
  const prevshow = () =>{
    var a = count - 1;
    if(a<0){
      a = 3;
      setCount(a);
    }
    setCount(a);
  }
  return (
    <div className="App">
      <h1>学生: [Huyền,Hoa,Hùng,Long]</h1>
      <h3>位置: {count+1}</h3>
      <h3>名前:{itemShow}</h3>
      <div>
        <button onClick={nextshow}>next</button>
        <button onClick={prevshow}>prev</button>
      </div>
    </div>
  );
}

export default App;