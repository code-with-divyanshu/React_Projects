import "./App.css";
import Accordian from "./components/Accordian/Accordian";
import RandomColor from "./components/GeneratorRandomColor/RandomColor";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";
import NestedMenu from "./components/NestedMenu/NestedMenu";
import StarRating from "./components/Star-Rating/StarRating";
import menus from "./components/NestedMenu/data";
import QRCodeGenerator from "./components/QRCodeGenerate/QRCodeGenerator";
import ThemeSwitch from "./components/ThemeSwitcher/ThemeSwitch";
import ScrollIndicator from "./components/Scroll_Indicator/ScrollIndicator";
import TabText from "./components/CustomTabs/TabText";
import ModleText from "./components/CustomModal/ModalText";
import GithubProfileFinder from "./components/GithubProfileFinder/GithubProfileFinder";
import TicTacToe from "./components/Tic_Tac_Toe/TicTacToe";

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
        {/* <QRCodeGenerator /> */}

        {/* ThemeSwitcher Component */}
        {/* <ThemeSwitch /> */}

        {/* ScrollIndicator Component */}
        {/* <ScrollIndicator url={`https://dummyjson.com/products?limit=100`} /> */}

        {/* Custom Tabs Component */}
        {/* <TabText /> */}

        {/* Custom Modal Component */}
        {/* <ModleText /> */}

        {/* Github Profile Finder Component  */}
        {/* <GithubProfileFinder /> */}

        {/* TicTacToe Component */}
        <TicTacToe />
      </div>
    </>
  );
}

export default App;
