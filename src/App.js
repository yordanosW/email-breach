import { useState } from "react";
import Input from "./Components/Input"
import Display from "./Components/Display"


function App() {
  const [data, setData] = useState(null)
  const display = data && <Display data={data}/>
  return (
    <div>
   <h1>
   Email Branch Detection
    </h1> 
      <Input setData={setData}/>
    </div>
  );
}

export default App;
