import { useState } from 'react';

const initialTasks = [
  { id: 1, text: 'Aprender Hooks' },
  { id: 2, text: 'Revisar o uso do map()' },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [inputValue, setInputValue] = useState('');

  function handleAddTask(event) {
    event.preventDefault();

    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: trimmedValue,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setInputValue('');
  }

  function handleRemoveTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    );
  }

  return (
    <main className="app-shell">
      <section className="todo-card" aria-labelledby="todo-title">
        <p className="eyebrow">Atividade 8</p>
        <h1 id="todo-title">To-Do List com React</h1>
        <p className="description">
          Recriando a lista de tarefas da Aula 6 com componentes, estado e
          renderizacao declarativa.
        </p>

        <form className="todo-form" onSubmit={handleAddTask}>
          <label className="sr-only" htmlFor="task-input">
            Digite uma nova tarefa
          </label>
          <input
            id="task-input"
            type="text"
            placeholder="Digite uma tarefa"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul className="task-list" aria-label="Lista de tarefas">
          {tasks.length === 0 ? (
            <li className="empty-state">Nenhuma tarefa adicionada ainda.</li>
          ) : (
            tasks.map((task) => (
              <li key={task.id} className="task-item">
                <span>{task.text}</span>
                <button type="button" onClick={() => handleRemoveTask(task.id)}>
                  Remover
                </button>
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
}

export default App;
