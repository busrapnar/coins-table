import { useState } from "react";
import AmountInput from "./components/AmountInput";

function App() {
  const [amount, setAmount] = useState("100");
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="uppercase text-6xl text center font-bold bg-gradient-to-br from-purple-600 to-sky-400 bg-clip-text text-transparent from-30%">
        Find cheapest BTC
      </h1>
      <div className="flex justify-center mt-8 ">
        <AmountInput value={amount} onChange={e => setAmount(e.target.value)}/>
      </div>
    </main>
  );
}

export default App;