import styles from "../styles/components/addtask.module.scss";

import deleteIcon from "../assets/icons/delete_outline.svg";
import closeIcon from "../assets/icons/close.svg";
import saveIcon from "../assets/icons/save.svg";
import addIcon from "../assets/icons/add_circle.svg";


import { useRef, useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAddInput = () => {
    setIsOpen(prev => !prev)
  }

  const nameRef = useRef(null);
  const estPomosRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      name: nameRef.current.value,
      isCompleted: false,
      estPomos: estPomosRef.current.value,
      completedPomos: 0,
    }

    setTasks([...tasks, newTask]);

    nameRef.current.value = '';
    estPomosRef.current.value = 0;

  }

  return (
    <>
      {isOpen && <form className={styles.addtask__container} onSubmit={handleSubmit}>
          <h3>Adcionando tarefa</h3>


            <textarea required className={styles.addtask__input} ref={nameRef} placeholder="No que você está trabalhando?" />


          <label >
            <span>Pomodoros estimados:</span>
            <input type="number" required ref={estPomosRef} defaultValue={0}/>
          </label>

          <div className={styles.addtask__buttonsContainer}>
            <button>
              <img src={deleteIcon} alt="botão de deletar" />
              <span>Deletar</span>
            </button>

            <div>
              <button onClick={toggleAddInput}>
                <img src={closeIcon} alt="botão de fechar" />
                <span>Cancelar</span>
              </button>

              <button type="submit">
                <img src={saveIcon} alt="botão de salvar" />
                <span>Salvar</span>
              </button>
            </div>

          </div>
        </form>}

      <div className={styles.addtask__addButton} onClick={toggleAddInput}>
        <img src={addIcon} alt="" />
        <p>Adcionar tarefa</p>
      </div>
    </>
  )
}

export default AddTask