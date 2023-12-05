import styles from "../styles/components/todolist.module.scss"

import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Task from "./Task";


const ToDoList = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    return storedTasks ? storedTasks : [];
  });

  const [finishTime, setfinishTime] = useState(() => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  })

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

  const pomoDuration = [30, 30, 40];
  
  useEffect(() => {
    const remainingPomos =  tasks.reduce((sum, task) => sum + Number(task.estPomos), 0);
    console.log(remainingPomos)
  
    const currentTime = new Date(); 
  
  let totalTimeRemaining = 0;
  for (let i = 0; i < remainingPomos; i++) {
  
    totalTimeRemaining += pomoDuration[i % 3];
  }
  
  const estimatedFinishTime = new Date(currentTime.getTime() + totalTimeRemaining * 60000);
  console.log(estimatedFinishTime)
  
  const hours = estimatedFinishTime.getHours();
  const minutes = estimatedFinishTime.getMinutes();
  
  console.log(hours, minutes)
  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  console.log(timeString)
    
  setfinishTime(timeString)
    
  }, [tasks]);
  
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

      <div className={styles.todolist__finishTime}>
        <p>Horário de finalização: {finishTime}</p>
      </div>

    </section>
  )
}

export default ToDoList