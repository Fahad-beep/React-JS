import { useState } from "react";
import ButtonGradient from "../src/assets/svg/ButtonGradient";
import Button from "../components/Button";
import Header from "../components/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Button />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
