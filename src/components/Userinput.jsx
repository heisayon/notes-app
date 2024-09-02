import { useStore } from "../store/inputStore";
function Userinput() {
  const inputValue = useStore((state) => state.input);
  const setInputValue = useStore((state) => state.setInput);
  const handleInput = (event) => {
    try {
      setInputValue(event.target.value);
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <input
      placeholder="What's up g? 🤔"
      className="px-8 py-4 p-2 pr-[120px] border ring-1 rounded-lg"
      onChange={handleInput}
      value={inputValue}
    />
  );
}

export default Userinput;
