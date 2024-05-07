import React from 'react';
import styles from './Modal.module.css';

type ModalType = {
  func?: React.Dispatch<React.SetStateAction<boolean>>;
  stylesFrom?: CSSModuleClasses[string];
}

const Modal = ({func, stylesFrom}: ModalType) => {
  return (
    <div
      className={`${styles.Modal} ${stylesFrom}`}
      onClick={func? ()=> func((state)=> !state) : undefined}
    > 
    </div>
  )
}

export default Modal;