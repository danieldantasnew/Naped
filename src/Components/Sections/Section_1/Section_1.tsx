import React from 'react'
import styles from './Section_1.module.css';
import { Naped } from '../../../Store/Context/DataContext';


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
          <div className={styles.imageContent} key={item.id}>
            <img src={item.images[0]} alt={`Foto de ${item.title}`} />
            <h2>{item.title}</h2>
            <p>{item.info}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Section_1;