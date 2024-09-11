import { useState, useEffect } from 'react';

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');
  const [updateId, setUpdateId] = useState(null);

  // Fetch all notes when the component loads
  useEffect(() => {
    fetch('/api/notes')
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  // Function to add a new note
  const addNote = async () => {
    const res = await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const newNote = await res.json();
    setNotes([...notes, newNote]);
    setText('');
  };

  // Function to update an existing note
  const updateNote = async (id, newText) => {
    const res = await fetch('/api/notes', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, text: newText }),
    });
    const updatedNote = await res.json();
    setNotes(notes.map(note => (note.id === id ? updatedNote : note)));
    setText('');
    setUpdateId(null);
  };

  // Function to delete a note
  const deleteNote = async id => {
    await fetch('/api/notes', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Notes</h1>
      <div style={inputContainerStyle}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter note text"
          style={inputStyle}
        />
        <button
          onClick={() => (updateId ? updateNote(updateId, text) : addNote())}
          style={buttonStyle}
        >
          {updateId ? 'Update Note' : 'Add Note'}
        </button>
      </div>
      <ul style={listStyle}>
        {notes.map(note => (
          <li key={note.id} style={noteStyle}>
            {note.text}
            <div>
              <button onClick={() => { setText(note.text); setUpdateId(note.id); }} style={editButtonStyle}>
                Edit
              </button>
              <button onClick={() => deleteNote(note.id)} style={deleteButtonStyle}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Styles for the frontend components
const containerStyle = {
  padding: '20px',
  maxWidth: '600px',
  height: '100vh',
  margin: '0 auto',
};

const titleStyle = {
  textAlign: 'center',
  color: '#333',
};

const inputContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px',
};

const inputStyle = {
  flex: '1',
  padding: '10px',
  fontSize: '16px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  marginLeft: '10px',
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const noteStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

const editButtonStyle = {
  marginRight: '10px',
  backgroundColor: '#ffeb3b',
  border: 'none',
  cursor: 'pointer',
};

const deleteButtonStyle = {
  backgroundColor: '#f44336',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

