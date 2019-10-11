import React, {useState} from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import Display from './components/Display/Display';
import './App.css';

function App() {
  //Need to follow both balls and strikes and start with a state value of (0) in both cases.
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)
  const [outs, setOuts] = useState(0)



  const scoreboard = (callString) => {
    switch (callString) {

      case 'strike':
        const newStrikeInt = strikes + 1
          if(strikes === 3) {
            clearBatter()
            setOuts(outs + 1)
          } else {
            setStrikes(newStrikeInt)
            console.log('strikes', strikes)
          }
          break;
          
      case 'ball':
        const newBallInt = balls + 1

          if(balls === 4) {
            clearBatter()
          } else {
            setBalls(newBallInt)
            console.log('balls', balls)
          }

        break;

      case 'foul':
        const strikeCount = strikes
          //We're only allowed 2 foul balls. If you hit another foul ball and strikes are already at 2,
          if(strikeCount <= 1) {
            setStrikes(strikeCount + 1)
          } else { 
            return strikes;
          }

        break;

      case 'hit':

          setBalls(0)
            console.log(balls) 
        
          setStrikes(0)
            console.log(strikes) 

        break;

      default: 
        console.log('something went wrong')
        break;
    }
  }

  const clearBatter = () => {
    setStrikes(0)
    setBalls(0)
  }

  const clearBoard = () => {
    clearBatter()
    setOuts(0)
  }

  return (
    <div className="App">
      <h1>Hello. This is a baseball app.</h1>

      <Display 
        strikes={strikes} 
        balls={balls}
        outs={outs}
        />
      
      <Dashboard 
        scoreboard={scoreboard}
        strikes={strikes}
        setStrikes={setStrikes}
        balls={balls}
        setBalls={setBalls}
        />
      <button onClick={() => clearBoard()}>Clear</button>
    </div>
  );
}

export default App;


{/* RULES

STRIKES: 

  //the counter for strikes needs to collect information onClick and keep track of it.
    When a strike is thrown, count should increment by 1. If a ball is thrown and 
    it is fouled off, the counter should check to see if the count === 2. If true,
    strike count should not increment. If strike count === 3, strike count is 
    reset and the out counter is incremented by 1.

  Counter(strike, 0) {
    strike === 3
    ? setCounter(strike === 0)
      setCounter(out +1)
    : setCounter(strike +1)
  }

  Counter(foul) //not really sure about this one. Will probably not have to make
  a new counter, rather to create a conditional statement under the foul onClick
  handler. 
  
  strike <=1 
  
  ? setCounter(strike + 1)
  : return Counter(strike)


BALLS: 

  Counter(ball, 0) {}
  onClick={() => setCounter(ball + 1)}
  if(count === 4) {
    setCounter(ball = 0)
  }

HITS: 

  onClick={() => {
    setCounter(ball, 0)
    setCounter(strike, 0)
  }}


OUTS: 

  Counter(out, 0) {}
  onClick={() => setCounter(out + 1)}
//Could I do this using "value" instead of specifically indicating key? 
//That would be more efficient.


  //This is a count function that will store its results in localStorage.

  // 1) Regular version.

  const [count, setCount] = useState(() => {
  let value;
    try 
      {value=JSON.parse(window.localStorage.getItem('my counter') || '0')} 
    catch (e) 
      {value = 0}
    return value;
});

useEffect(() => {
  window.localStorage.setItem('my counter', count);
}, [count]);

return(
  <div>
    <button onClick={() => setCount(count++)}>{count}</button>
  </div>
)



// 2) Reusable hook for the counter function.

function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    let value;
    try 
      {value= JSON.parse(window.localStorage.getItem(key) || String(defaultValue))} 
    catch (e) 
      {value = defaultValue;}
    return value;
  })

  useEffect(() => {
    window.localStorage.setItem(key, state)}, [state]);
  return [state, setState];
}

//Counter function using our useLocalStorageState hook.
function Counter () {
  const [count, setCount] = useLocalStorageState('something-here', 0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}









*/}