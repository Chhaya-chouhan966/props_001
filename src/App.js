
import React from 'react';
import './App.css';
import Img from './Img';
import colorData from './Colordata';




function App() {
  
  return (
    <div className="App">
      <Img bgc={colorData[0].bg} colorText={ colorData[0].HexaCtext} cN={ colorData[0].color[0].colorName}  color={colorData[0].color[0].color}/>
      <Img bgc={colorData[1].bg} colorText={ colorData[1].HexaCtext} cN={ colorData[1].color[0].colorName}  color={colorData[1].color[0].color}/>
      <Img bgc={colorData[2].bg} colorText={ colorData[2].HexaCtext} cN={ colorData[2].color[0].colorName}  color={colorData[2].color[0].color}/>
      <Img bgc={colorData[3].bg} colorText={ colorData[3].HexaCtext} cN={ colorData[3].color[0].colorName}  color={colorData[3].color[0].color}/>
      <Img bgc={colorData[4].bg} colorText={ colorData[4].HexaCtext} cN={ colorData[4].color[0].colorName}  color={colorData[4].color[0].color}/>
      <Img bgc={colorData[5].bg} colorText={ colorData[5].HexaCtext} cN={ colorData[5].color[0].colorName}  color={colorData[5].color[0].color}/>
      <Img bgc={colorData[6].bg} colorText={ colorData[6].HexaCtext} cN={ colorData[6].color[0].colorName}  color={colorData[6].color[0].color}/>
      <Img bgc={colorData[7].bg} colorText={ colorData[7].HexaCtext} cN={ colorData[7].color[0].colorName}  color={colorData[7].color[0].color}/>
      <Img bgc={colorData[8].bg} colorText={ colorData[8].HexaCtext} cN={ colorData[8].color[0].colorName}  color={colorData[8].color[0].color}/>
      <Img bgc={colorData[9].bg} colorText={ colorData[9].HexaCtext} cN={ colorData[9].color[0].colorName}  color={colorData[9].color[0].color}/>
      
      
    </div>
  );
}

export default App;
