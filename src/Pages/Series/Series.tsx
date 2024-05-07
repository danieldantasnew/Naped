import { useDataContext } from '../../Store/Context/DataContext';
import Loading from '../../Components/Helper/Loading/Loading';
import Cover from '../../Components/Cover/Cover';
import useCategoryData from '../../Hooks/useCategoryData';
import Card from '../../Components/Card/Card';
import Flex from '../../Components/Layouts/Flex/Flex';
import Categories from '../../Components/Layouts/Categorys/Categories';

const Series = () => {
  const { data, loading, error } = useDataContext();
  const newData = useCategoryData(data, 'series');
  
  if (loading) return <Loading />;
  if (!newData) return null;

  return (
    <Flex>
      <Cover
        title="Séries"
        description='O Naped pode ser sua fonte de informações sobre Séries e outros assuntos relacionados.'
        image={newData.map((item)=> item.images[0])}
        slideStart={0}
        slideEnd={newData.length}
      />
      <Categories>
        {newData.map((item) =>
          <Card
            key={item.id}
            id={item.id}
            images={item.images}
            title={item.title}
            info={item.info}
          />
        )}
      </Categories>
    </Flex>
  )
}

export default Series;