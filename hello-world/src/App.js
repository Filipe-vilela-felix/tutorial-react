import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import ErrorBoudary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoudary>
        <Hero heroName="Batman" />
      </ErrorBoudary>
      <ErrorBoudary>
        <Hero heroName="Superman" />
      </ErrorBoudary>
      <ErrorBoudary>
        <Hero heroName="Joker" />
      </ErrorBoudary>
    </div>
  );
}

export default App;
