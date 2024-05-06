import React from 'react';
import styles from './Button.module.css';
import ArrowRight from '../../../assets/ArrowRight';

type ButtonType = React.ComponentProps<'button'> & {
  label: string;
}

const Button = ({label, ...props}: ButtonType) => {
  return (
    <button
      className={`${styles.Button}`}
      {...props}
    >
      {label}
      <ArrowRight color='#FEFBFB' width='20' height='20'/>
    </button>
  )
}

export default Button;