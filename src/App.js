import "./App.css";
import Layout from "./components/Layout.jsx";
import FlipCard from "./components/FlipCard.jsx";
import Carousel from "./components/Carousel.jsx";
function App() {

  const notes = [
    {title:"question1",content:"answer1"},
    {title:"question2",content:"answer2"},
    {title:"question3",content:"answer3"},
    {title:"question4",content:"answer4"},
    {title:"question5",content:"answer5"},
    {title:"question6",content:"answer6"},
    {title:"question7",content:"answer7"}
  ]
  return (
    <div className="App">
        <Carousel notes ={notes} />
    </div>
  );
}

export default App;
