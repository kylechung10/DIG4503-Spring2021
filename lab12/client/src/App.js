import "./App.css";
import GetRoute from "./components/GetRoute";
import PostRoute from "./components/PostRoute";
import PutRoute from "./components/PutRoute";

function App() {
  return (
    <div className="App">
      <h1>Book App</h1>
      <h3>Lab 12: Full Stack Application</h3>
      <GetRoute />
      <PutRoute />
      <PostRoute />
    </div>
  );
}

export default App;
