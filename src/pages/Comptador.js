import { useState } from "react";

export default function Comptador() {
  const [count, setCount] = useState(0);
  const increment = (quantitat) => setCount(count + quantitat);
  return (
    <div>
      Comptador: {count}.<br />
      <button onClick={increment(+1)}>+1</button>;
      <button onClick={increment(-1)}>-1</button>;
    </div>
  );
}
