import React from 'react';
import './App.css';
import ColoredBoxes from './colorbox.js';

function ColoredBoxes(props) {

    const styles = {
        backgroundColor: props.boxColor
    }
    
    return (
        <div style ={styles}>
            <h1>{props.boxes.title}</h1>
            <h3>{props.boxes.subtitle}</h3>
            <p>{props.boxes.info}</p>
        </div>
    );
}



function App() {
  return (
    <div>
      <ColoredBoxes boxColor="blue"
      boxes={{title: "Box #1", subtitle: " Blue", info: "Blue is the color of blueberries."}}
      />
      <ColoredBoxes boxColor="red"
      boxes={{title: "Box #2", subtitle: "Red.", info: "Red is the color of a stop sign."}}
      />
      <ColoredBoxes boxColor="green"
      boxes={{title: "Box #3", subtitle: "Green.", info: "Green is the color of grass."}}
      />
      <ColoredBoxes boxColor="purple"
      boxes={{title: "Box #4", subtitle: "Purple.", info: "Purple is the color of a grapes."}}
      />
      <ColoredBoxes boxColor="pink"
      boxes={{title: "Box #5", subtitle: "Pink.", info: "Pink is the color of flower."}}
      />
      <ColoredBoxes boxColor="yellow"
      boxes={{title: "Box #6", subtitle: "Yellow.", info: "Yellow is the color of sun."}}
      />
      <ColoredBoxes boxColor="grey"
      boxes={{title: "Box #7", subtitle: "Grey.", info: "Grey is the color of a rain cloud."}}
      />
      <ColoredBoxes boxColor="orange"
      boxes={{title: "Box #8", subtitle: "Orange.", info: "Orange is the color of oranges."}}
      />
      <ColoredBoxes boxColor="teal"
      boxes={{title: "Box #9", subtitle: "Teal.", info: "Teal is the color of the ocean."}}
      />
      <ColoredBoxes boxColor="maroon"
      boxes={{title: "Box #10", subtitle: "Maroon.", info: "Maroon is the color of wine."}}
      />
    </div>
  );
}


export default ColoredBoxes