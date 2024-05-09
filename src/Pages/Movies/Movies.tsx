import React from "react";
import { useDataContext } from "../../Store/Context/DataContext";
import useCategoryData from "../../Hooks/useCategoryData";
import Loading from "../../Components/Helper/Loading/Loading";
import Flex from "../../Components/Layouts/Flex/Flex";
import Cover from "../../Components/Cover/Cover";
import Categories from "../../Components/Layouts/Categories/Categories";
import Card from "../../Components/Card/Card";
import Search from "../../Components/Search/Search";

const Movies = () => {
  const { data, loading, error } = useDataContext();
  const [search, setSearch] = React.useState('');
  const newData = useCategoryData(data, 'movies', search);
  const dataForCover = useCategoryData(data, 'movies');

  if (loading) return <Loading />;
  if (!newData || !dataForCover) return null;

  return (
    <Flex>
      <Cover
        title="Filmes"
        description="O Naped pode ser sua fonte de informações sobre Filmes e outros assuntos relacionados."
        image={dataForCover.map((item) => item.images[1])}
        slideStart={0}
        slideEnd={dataForCover.length}
      />
      <Search onChange={({target})=> setSearch(target.value)}/>
      <Categories newData={newData}/>
    </Flex>
  );
};

export default Movies;
