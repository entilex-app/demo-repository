import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input.trim(), done: false }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') addTodo();
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Todo List</h2>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="New todo"
          style={{ flex: 1, padding: '0.5rem' }}
        />
        <button onClick={addTodo} style={{ padding: '0.5rem 1rem' }}>Add</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                flex: 1,
                marginLeft: '0.5rem',
                textDecoration: todo.done ? 'line-through' : 'none',
                color: todo.done ? '#777' : '#000',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '0.5rem' }}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
