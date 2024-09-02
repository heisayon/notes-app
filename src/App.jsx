import List from "./components/List";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[1400px] m-auto p-9">
      <Navbar />
      <section className="text-white mt-28">
        <List />
      </section>
    </div>
  );
}

export default App;
