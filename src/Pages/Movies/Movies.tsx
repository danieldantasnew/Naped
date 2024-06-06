import React from "react";
import { useDataContext } from "../../Store/Context/DataContext";
import useCategoryData from "../../Hooks/useCategoryData";
import Loading from "../../Components/Helper/Loading/Loading";
import Flex from "../../Components/Layouts/Flex/Flex";
import Cover from "../../Components/Cover/Cover";
import Categories from "../../Components/Layouts/Categories/Categories";
import Search from "../../Components/Search/Search";
import ErrorComponent from "../../Components/Helper/ErrorComponent/ErrorComponent";
import usePaginate from "../../Hooks/usePaginate";
import NavigateBetweenPages from "../../Components/NavigateBetweenPages/NavigateBetweenPages";

const Movies = () => {
  const { data, loading, error } = useDataContext();
  const allItemsInCategory = useCategoryData(data, "movies");
  const [search, setSearch] = React.useState("");
  const newData = useCategoryData(data, "movies", search);
  const [page, setPage] = React.useState(1);
  const cardsPagination = usePaginate({
    data: allItemsInCategory,
    page,
    limit: 12,
  });

  if (loading) return <Loading />;
  if (error) return <ErrorComponent message={error} />;
  if (!cardsPagination || !allItemsInCategory || !newData)
    return <ErrorComponent message="Não há itens para mostrar" />;

  return (
    <Flex>
      <Cover
        title="Filmes"
        description="O Naped pode ser sua fonte de informações sobre Filmes e outros assuntos relacionados."
        image={allItemsInCategory}
        slideStart={0}
        slideLenght={allItemsInCategory.length}
      />
      <Search onChange={({ target }) => setSearch(target.value)} />
      {search ? (
        <Categories newData={newData} />
      ) : (
        <Categories newData={cardsPagination.data} />
      )}
      {search ? (
        ""
      ) : (
        <NavigateBetweenPages
          page={page}
          setPage={setPage}
          totalPages={cardsPagination.pages}
          firstPage={cardsPagination.first}
          lastPage={cardsPagination.last}
        />
      )}
    </Flex>
  );
};

export default Movies;
