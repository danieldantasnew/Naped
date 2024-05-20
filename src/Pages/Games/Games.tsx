import React from "react";
import Flex from "../../Components/Layouts/Flex/Flex";
import Cover from "../../Components/Cover/Cover";
import Categories from "../../Components/Layouts/Categories/Categories";
import Loading from "../../Components/Helper/Loading/Loading";
import { useDataContext } from "../../Store/Context/DataContext";
import useCategoryData from "../../Hooks/useCategoryData";
import Search from "../../Components/Search/Search";
import ErrorComponent from "../../Components/Helper/ErrorComponent/ErrorComponent";
import usePaginate from "../../Hooks/usePaginate";
import NavigateBetweenPages from "../../Components/NavigateBetweenPages/NavigateBetweenPages";

const Games = () => {
  const { data, loading, error } = useDataContext();
  const allItemsInCategory = useCategoryData(data, "games");
  const [search, setSearch] = React.useState("");
  const newData = useCategoryData(data, "games", search);
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
        title="Games"
        description="O Naped pode ser sua fonte de informações sobre Games e outros assuntos relacionados."
        image={allItemsInCategory}
        slideStart={0}
        slideEnd={allItemsInCategory.length}
      />
      <Search onChange={({ target }) => setSearch(target.value)} />
      {search ? (
        <Categories newData={newData} />
      ) : (
        <Categories newData={cardsPagination.data} />
      )}
      {search ? '' :
        <NavigateBetweenPages
          page={page}
          setPage={setPage}
          totalPages={cardsPagination.pages}
          firstPage={cardsPagination.first}
          lastPage={cardsPagination.last}
        />
      }
    </Flex>
  );
};

export default Games;
