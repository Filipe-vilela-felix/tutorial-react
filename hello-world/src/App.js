import logo from './logo.svg';
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverFocusTwo';
import User from './components/User'
import CounterRender from './components/CounterRender';

function App() {
  return (
    <div className="App">
      <CounterRender render={(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )} 
      />
      <CounterRender render={(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )} />  
      {/* 
      <ClickCounterTwo />
      <HoverCounterTwo />
      */}
      <User name={(isLoggedIn) => (isLoggedIn ? "Vishwas" : "Gest")} />     {/*Demonstração mais simples de como funciona umm render porps*/}
    </div>
  );
}

export default App;
