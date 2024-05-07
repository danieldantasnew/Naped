import Loading from '../../Components/Helper/Loading/Loading';
import Section_1 from '../../Components/Sections/Section_1/Section_1';
import Section_2 from '../../Components/Sections/Section_2/Section_2';
import Section_3 from '../../Components/Sections/Section_3/Section_3';
import { useDataContext } from '../../Store/Context/DataContext';
import { Naped } from '../../Types/types';
import styles from './Home.module.css';

const highNotice = (data: Naped[]) => {
  return data.sort((itemA, itemB) => {
    return itemB.clicks - itemA.clicks;
  });
}

const Home = () => {
  const { data, loading } = useDataContext();

  if (loading) return <Loading />;
  if (!data) return null;
  return (
    <section className={`${styles.Home} animationLeft`}>
      <Section_1 data={highNotice(data)} />
      <Section_2 data={highNotice(data)} />
      <Section_3 data={highNotice(data)} />
    </section>
  )
}

export default Home;