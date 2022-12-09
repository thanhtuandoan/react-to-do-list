import logo from './logo.svg';
import './App.css';
import { TodoItem } from "./components/todo-item/TodoItem";
import { Layout } from "./components/layout/Layout";
import { DemoForm } from "./components/form-demo/DemoForm"

function App() {
  return (
    <div className="App">
      <Layout />
      {/* <DemoForm /> */}
    </div>
  );
}

export default App;
