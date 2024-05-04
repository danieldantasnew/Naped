import React from 'react'
import styles from './Section_1.module.css';
import { Naped } from '../../../Types/types';
import Card from '../../Card/Card';

const Section_1 = ({ data }: { data: Naped[] }) => {
  const [newData, setNewData] = React.useState<Naped[] | null>(null);
  
  React.useEffect(() => {
    if (data) {
      setNewData(data.slice(0,3));
    }
  }, [data]); 

  if (!newData) return null;

  return (
    <div className={styles.Section_1}>
      <div className={styles.content_1}>
        <h1>Mundo nerd? Naped!</h1>
        <p>O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.</p>
      </div>
      <div className={styles.content_2}>
        {newData.map((item) => 
          <Card id={item.id} title={item.title} images={item.images} info={item.info} />
        )}
      </div>
    </div>
  )
}

export default Section_1;