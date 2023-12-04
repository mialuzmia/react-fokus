import styles from "../styles/components/todolist.module.scss"



import { useState } from "react";
import AddTask from "./AddTask";


const ToDoList = () => {
  
  return (
    <section className={styles.todolist__container}>
      <h2>Lista de Tarefas:</h2>

      <AddTask />

      
      
      
    </section>
  )
}

export default ToDoList