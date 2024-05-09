import React from "react";
import Cover from "../../Components/Cover/Cover";
import Loading from "../../Components/Helper/Loading/Loading";
import Categories from "../../Components/Layouts/Categories/Categories";
import Flex from "../../Components/Layouts/Flex/Flex";
import Search from "../../Components/Search/Search";
import useCategoryData from "../../Hooks/useCategoryData";
import { useDataContext } from "../../Store/Context/DataContext";


const Animes = () => {
  const { data, loading, error } = useDataContext();
  const [search, setSearch] = React.useState('');
  const newData = useCategoryData(data, 'animes', search);
  const dataForCover = useCategoryData(data, 'animes');

  if (loading) return <Loading />;
  if (!newData || !dataForCover) return null;

  return (
    <Flex>
      <Cover
        title="Animes"
        description="O Naped pode ser sua fonte de informações sobre Animes e outros assuntos relacionados."
        image={dataForCover.map((item) => item.images[1])}
        slideStart={0}
        slideEnd={dataForCover.length}
      />
      <Search onChange={({target})=> setSearch(target.value)}/>
      <Categories newData={newData}/>
    </Flex>
  );
};

export default Animes;