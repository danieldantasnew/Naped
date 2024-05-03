import React from 'react';
import styles from './Modal.module.css';

type ModalType = {
  func: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({func}: ModalType) => {
  return (
    <div
      className={styles.Modal}
      onClick={()=> func((state)=> !state)}
    > 
    </div>
  )
}

export default Modal;