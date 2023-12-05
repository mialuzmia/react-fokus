import styles from "../styles/components/todolist.module.scss"

import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Task from "./Task";


const ToDoList = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    return storedTasks ? storedTasks : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks)

  }, [tasks]);

  const handleDelete = (taskToDelete) => {
    setTasks(() => tasks.filter(task => task !== taskToDelete));
  }

  const handleComplete = (taskToComplete) => {
    setTasks(tasks.map(task => 
      task.name === taskToComplete.name ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  }
  
  return (
    <section className={styles.todolist__container}>
      <h2>Lista de Tarefas:</h2>
      
      {tasks.length > 0 && tasks.map(task => (
        <Task task={task} key={task.name} handleDelete={() => handleDelete(task)}
        handleComplete={handleComplete}/>
      ))}

      <AddTask 
        tasks={tasks}
        setTasks={setTasks}
      />

    </section>
  )
}

export default ToDoList