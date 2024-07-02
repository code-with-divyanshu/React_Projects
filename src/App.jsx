import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import RandomColor from "./components/GeneratorRandomColor/RandomColor";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import StarRating from "./components/Star-Rating/StarRating";

function App() {
  return (
    <>
      <div className="App">
        {/* Accordian Component */}
        {/* <Accordian /> */}

        {/* RandomColor Commponet */}
        {/* <RandomColor /> */}

        {/* StarRating Components */}
        {/* <StarRating noOfStars={10} /> */}

        {/* ImageSlider Components */}
        <ImageSlider
          url={`https://picsum.photos/v2/list`}
          limit={"10"}
          page={"1"}
        />
      </div>
    </>
  );
}

export default App;
