import { useEffect, useState, type ChangeEvent, type SubmitEvent } from 'react';
import { API_URL } from './config';

type Task = {
  id: number;
  title: string;
  createdAt: string;
};

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/tasks`)
      .then((res) => res.json())
      .then(({ tasks }) => setTasks(tasks))
      .catch((err) => console.log(err));
  }, []);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value);
  }

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: taskTitle }),
    })
      .then((res) => res.json())
      .then(({ tasks }) => {
        setTasks(tasks);
        setTaskTitle('');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div>Hello from React</div>
      <div>Hello from React 2</div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={taskTitle} onChange={handleChange} />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
