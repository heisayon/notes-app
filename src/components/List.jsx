import { useNotes } from "../store/notesStore";
import { useEffect } from "react";
import db from "../appwrite/database";
import { Query } from "appwrite";
function List() {
  const notes = useNotes((state) => state.notes);
  const setNotes = useNotes((state) => state.setNotes);
  const delNotes = useNotes((state) => state.delete);
  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    const request = await db.notes.list([Query.orderDesc("$createdAt")]);
    setNotes(request.documents);
  };

  const deleteData = async (id) => {
    db.notes.delete(id);
    delNotes(id);
  };
  return (
    <div className="border-2 border-white flex justify-center items-center flex-wrap min-h-[80vh] p-5">
      {notes?.map((note, i) => (
        <li
          key={i}
          onClick={() => deleteData(note.$id)}
          className="border border-white rounded-lg w-[300px] min-h-[300px] m-3 list-none first-letter:uppercase px-4 pt-2 text-center"
        >
          {note.body}
        </li>
      ))}
    </div>
  );
}

export default List;
