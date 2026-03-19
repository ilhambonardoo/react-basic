import { useState } from "react";
import Counter from "./Counter";

const CounterApp = () => {
  const [show2, setShow2] = useState(true);

  function handleChange(e) {
    setShow2(e.target.checked);
  }

  return (
    <div>
      {show2 && <Counter nama={"Ilham"} />}
      {!show2 && <Counter nama={"Bonardo"} />}
      <input type="checkbox" checked={show2} onChange={handleChange} />
      Tampilkan Counter 2
    </div>
  );
};

export default CounterApp;
