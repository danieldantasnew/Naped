import Loading from '../../Components/Helper/Loading/Loading';
import Section_1 from '../../Components/Layouts/Sections/Section_1/Section_1';
import Section_2 from '../../Components/Layouts/Sections/Section_2/Section_2';
import LatestNews from '../../Components/LatestNews/LatestNews';
import { useDataContext } from '../../Store/Context/DataContext';
import { Naped } from '../../Types/types';
import styles from './Home.module.css';
import ErrorComponent from '../../Components/Helper/ErrorComponent/ErrorComponent';

const highNotice = (data: Naped[]) => {
  return data.sort((itemA, itemB) => {
    return itemB.clicks - itemA.clicks;
  });
}

const Home = () => {
  const { data, loading, error } = useDataContext();

  if (loading) return <Loading />;
  if(error) return  <ErrorComponent message={ error }/>
  if (!data || data.length === 0) return <ErrorComponent message="Não há itens para mostrar"/>;
  return (
    <section className={`${styles.Home} animationLeft`}>
      <Section_1 data={highNotice(data)} />
      <Section_2 data={highNotice(data)} />
      <LatestNews data={highNotice(data)} />
    </section>
  )
}

export default Home;