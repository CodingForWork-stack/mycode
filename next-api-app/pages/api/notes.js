// pages/api/notes.js

let notes = []; // This will act as our in-memory "database"

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(notes);
      break;

    case 'POST':
      const { text } = req.body;
      const newNote = { id: Date.now(), text };
      notes.push(newNote);
      res.status(201).json(newNote);
      break;

    case 'PUT':
      const { id, text: newText } = req.body;
      notes = notes.map(note => (note.id === id ? { ...note, text: newText } : note));
      const updatedNote = notes.find(note => note.id === id);
      res.status(200).json(updatedNote);
      break;

    case 'DELETE':
      const { id: deleteId } = req.body;
      notes = notes.filter(note => note.id !== deleteId);
      res.status(200).json({ message: 'Note deleted' });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

