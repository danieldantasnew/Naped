import React from 'react';
import { useDataContext } from '../../Store/Context/DataContext';
import Loading from '../../Components/Helper/Loading/Loading';
import Cover from '../../Components/Cover/Cover';
import useCategoryData from '../../Hooks/useCategoryData';
import Card from '../../Components/Card/Card';
import Flex from '../../Components/Layouts/Flex/Flex';
import Categories from '../../Components/Layouts/Categories/Categories';
import Search from '../../Components/Search/Search';

const Series = () => {
  const { data, loading, error } = useDataContext();
  const [search, setSearch] = React.useState('');
  const newData = useCategoryData(data, 'series', search);
  const dataForCover = useCategoryData(data, 'series');

  if (loading) return <Loading />;
  if (!newData || !dataForCover) return null;


  return (
    <Flex>
      <Cover
        title="Séries"
        description='O Naped pode ser sua fonte de informações sobre Séries e outros assuntos relacionados.'
        image={dataForCover.map((item)=> item.images[1])}
        slideStart={0}
        slideEnd={dataForCover.length}
      />
      <Search onChange={({target})=> setSearch(target.value)}/>
      <Categories newData={newData}/>
    </Flex>
  )
}

export default Series;