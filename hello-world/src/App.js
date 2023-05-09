import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form'


function App() {
  return (
    <div className="App">
      <Form />
      {/*
      <h1 className="error">Error</h1>
      <h1 className={styles.sucess}>Sucess</h1>
      */}
      {/*<Inline />*/}
      {/*<Stylesheet primary={true} />*/}
      {/*<NameList />*/}
      {/*<UserGreetting />*/}
      {/*<ParentComponent />*/}
      {/*<EventBind />*/}
      {/*<FunctionClick />*/}
      {/*<ClassClick  />*/}
      {/*<Counter />*/}
      {/*<Message />*/}
      {/*<Greet name="Bruce" heroName="Batman">
          <p>This is children prop</p>
      </Greet>*/}
      {/*<Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>*/}
      {/*<Greet name="Diana" heroName="Wonder Woman" />*/}
      {/*<Welcome name="Bruce" heroName="Batman" />*/}
      {/*<Welcome name="Clark" heroName="Superman">*/}
      {/*<Hello/>*/}
    </div>
  );
}

export default App;
