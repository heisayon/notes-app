import db from "../appwrite/database";
import { useStore } from "../store/inputStore";
import { useNotes } from "../store/notesStore";

function Button() {
  const inputValue = useStore((state) => state.input);
  const updateNote = useNotes((state) => state.updateNotes);
  const setInputValue = useStore((state) => state.setInput);
  const addNote = async () => {
    setInputValue("");
    const request = await db.notes.create({ body: inputValue });
    updateNote(request);
  };
  return (
    <button
      className="bg-cyan-800 text-white px-7 py-1 absolute right-0 m-2 top-0 bottom-0 rounded-lg active:scale-95 transition-all"
      onClick={addNote}
    >
      Post
    </button>
  );
}

export default Button;
