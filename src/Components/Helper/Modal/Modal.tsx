import React from 'react';
import styles from './Modal.module.css';

type ModalType = {
  func?: React.Dispatch<React.SetStateAction<boolean>>,
  stylesFrom?: React.CSSProperties
}

const Modal = ({func, stylesFrom}: ModalType) => {
  return (
    <div
      style={stylesFrom || {}}
      className={styles.Modal}
      onClick={func? ()=> func((state)=> !state) : undefined}
    > 
    </div>
  )
}

export default Modal;