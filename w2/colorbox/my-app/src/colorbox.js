import React from 'react';
import Box from './singlebox'



function App() {
  return (
    <div>
      <Box boxColor="blue"
      boxes={{title: "Box #1", subtitle: " Blue", info: "Blue is the color of blueberries."}}
      />
      <Box boxColor="red"
      boxes={{title: "Box #2", subtitle: "Red.", info: "Red is the color of a stop sign."}}
      />
      <Box boxColor="green"
      boxes={{title: "Box #3", subtitle: "Green.", info: "Green is the color of grass."}}
      />
      <Box boxColor="purple"
      boxes={{title: "Box #4", subtitle: "Purple.", info: "Purple is the color of a grapes."}}
      />
      <Box boxColor="pink"
      boxes={{title: "Box #5", subtitle: "Pink.", info: "Pink is the color of flower."}}
      />
      <Box boxColor="yellow"
      boxes={{title: "Box #6", subtitle: "Yellow.", info: "Yellow is the color of sun."}}
      />
      <Box boxColor="grey"
      boxes={{title: "Box #7", subtitle: "Grey.", info: "Grey is the color of a rain cloud."}}
      />
      <Box boxColor="orange"
      boxes={{title: "Box #8", subtitle: "Orange.", info: "Orange is the color of oranges."}}
      />
      <Box boxColor="teal"
      boxes={{title: "Box #9", subtitle: "Teal.", info: "Teal is the color of the ocean."}}
      />
      <Box boxColor="maroon"
      boxes={{title: "Box #10", subtitle: "Maroon.", info: "Maroon is the color of wine."}}
      />
    </div>
  );
}


export default App