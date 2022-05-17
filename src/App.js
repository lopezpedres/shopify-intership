import { useState } from "react";
import HeroHeader from "./components/HeroHeader";
import InitialModal from "./components/InitialModal";
import ItemsList from "./components/ItemList";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <InitialModal />
      <HeroHeader setLoading={ setLoading } />
      <ItemsList loading={ loading } />
    </div>
  )
}

export default App;
