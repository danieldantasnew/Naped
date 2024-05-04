import Section_1 from '../../Components/Sections/Section_1/Section_1';
import { useDataContext } from '../../Store/Context/DataContext';

const Home = () => {
  const {data} = useDataContext();

  if (!data) return null;

  return (
    <section className='animationLeft'>
      <Section_1 data={data} />
    </section>
  )
}

export default Home;