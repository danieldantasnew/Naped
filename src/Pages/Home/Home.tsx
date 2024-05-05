import Section_1 from '../../Components/Sections/Section_1/Section_1';
import Section_2 from '../../Components/Sections/Section_2/Section_2';
import { useDataContext } from '../../Store/Context/DataContext';
import { Naped } from '../../Types/types';
import styles from './Home.module.css';

const highNotice = (data: Naped[]) => {
  return data.sort((itemA, itemB) => {
    return itemB.clicks - itemA.clicks;
  });
}

const Home = () => {
  const { data } = useDataContext();

  if (!data) return null;
  return (
    <section className={`${styles.Home} animationLeft`}>
      <Section_1 data={highNotice(data)} />
      <Section_2 data={highNotice(data)} />
    </section>
  )
}

export default Home;