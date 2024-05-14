import React from 'react';
import Flex from '../../Components/Layouts/Flex/Flex';
import Cover from '../../Components/Cover/Cover';
import Categories from '../../Components/Layouts/Categories/Categories';
import Loading from '../../Components/Helper/Loading/Loading';
import { useDataContext } from '../../Store/Context/DataContext';
import useCategoryData from '../../Hooks/useCategoryData';
import Search from '../../Components/Search/Search';
import ErrorComponent from '../../Components/Helper/ErrorComponent/ErrorComponent';

const Games = () => {
  const { data, loading, error } = useDataContext();
  const [search, setSearch] = React.useState('');
  const newData = useCategoryData(data, 'games', search);
  const dataForCover = useCategoryData(data, 'games');

  if (loading) return <Loading />;
  if (error) return <ErrorComponent message={ error }/>;
  if (!newData || !dataForCover) return <ErrorComponent message="Não há itens para mostrar"/>;

  return (
    <Flex>
      <Cover
        title="Games"
        description="O Naped pode ser sua fonte de informações sobre Games e outros assuntos relacionados."
        image={dataForCover}
        slideStart={0}
        slideEnd={dataForCover.length}
      />
      <Search onChange={({target})=> setSearch(target.value)}/>
      <Categories newData={newData}/>
    </Flex>
  );
};

export default Games;