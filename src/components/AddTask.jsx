import styles from "../styles/components/addtask.module.scss";

import deleteIcon from "../assets/icons/delete_outline.svg";
import closeIcon from "../assets/icons/close.svg";
import saveIcon from "../assets/icons/save.svg";
import addIcon from "../assets/icons/add_circle.svg";


import { useState } from "react";

const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAddInput = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      {isOpen && <form className={styles.addtask__container}>
          <h3>Adcionando tarefa</h3>

          <label className={styles.addtask__input}>
            <textarea placeholder="No que você está trabalhando?" />
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
              <button>
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