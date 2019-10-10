import React from 'react';
// import Display from './components/Display/Display'
import Dashboard from './components/Dashboard/Dashboard'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello. This is a baseball app.</h1>
      <Dashboard />
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