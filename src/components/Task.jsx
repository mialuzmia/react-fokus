import styles from "../styles/components/task.module.scss";

import checkWhite from "../assets/icons/Check_branco.svg";
import checkGreen from "../assets/icons/Check_verde.svg";
import deleteIcon from "../assets/icons/delete_outline.svg";
import editIcon from "../assets/icons/edit.svg";
import { useState } from "react";



const Task = ({task, text, handleDelete, handleComplete }) => {
  

  return (
    <div className={`${styles.task__container} ${task.isCompleted ? styles.completed : ''}`}>
      <img src={task.isCompleted ? checkGreen : checkWhite}  alt="icone de check" 
      onClick={() => handleComplete(task)}/>

      <div>
        <p onClick={() => handleComplete(task)}>{task.name}</p>
        <span>pomos estimados: {task.estPomos} </span>

      </div>

      {/* <div className={styles.task__editContainer} onClick={handleDelete}>
        <img src={editIcon} alt="" />
      </div> */}

      <img 
      src={deleteIcon} 
      onClick={handleDelete}/>
    </div>
  )
}

export default Task