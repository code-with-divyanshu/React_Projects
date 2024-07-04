import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import RandomColor from "./components/GeneratorRandomColor/RandomColor";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";
import NestedMenu from "./components/NestedMenu/NestedMenu";
import StarRating from "./components/Star-Rating/StarRating";
import menus from "./components/NestedMenu/data";
import QRCodeGenerator from "./components/QRCodeGenerate/QRCodeGenerator";

function App() {
  return (
    <>
      <div className="App">
        {/* Accordian Component */}
        {/* <Accordian /> */}

        {/* RandomColor Commponet */}
        {/* <RandomColor /> */}

        {/* StarRating Component */}
        {/* <StarRating noOfStars={10} /> */}

        {/* ImageSlider Component */}
        {/* <ImageSlider
          url={`https://picsum.photos/v2/list`}
          limit={"10"}
          page={"1"}
        /> */}

        {/* LoadMoreData Component */}
        {/* <LoadMoreData /> */}

        {/* NestedMenu/tree view/menu ui/recursive navigation menu Component  */}
        {/* <NestedMenu menus={menus} /> */}

        {/* QRCodeGenerator Component */}
        <QRCodeGenerator />
      </div>
    </>
  );
}

export default App;
