import React from "react";
import { useDataContext } from "../../Store/Context/DataContext";
import Loading from "../../Components/Helper/Loading/Loading";
import Cover from "../../Components/Cover/Cover";
import useCategoryData from "../../Hooks/useCategoryData";
import Flex from "../../Components/Layouts/Flex/Flex";
import Categories from "../../Components/Layouts/Categories/Categories";
import Search from "../../Components/Search/Search";
import ErrorComponent from "../../Components/Helper/ErrorComponent/ErrorComponent";
import usePaginate from "../../Hooks/usePaginate";
import NavigateBetweenPages from "../../Components/NavigateBetweenPages/NavigateBetweenPages";

const Series = () => {
  const { data, loading, error } = useDataContext();
  const allItemsInCategory = useCategoryData(data, "series");
  const [search, setSearch] = React.useState("");
  const newData = useCategoryData(data, "series", search);
  const [page, setPage] = React.useState(1);
  const cardsPagination = usePaginate({
    data: allItemsInCategory,
    page,
    limit: 12,
    start: 0,
  });

  if (loading) return <Loading />;
  if (error) return <ErrorComponent message={error} />;
  if (!cardsPagination || !allItemsInCategory || !newData)
    return <ErrorComponent message="Não há itens para mostrar" />;

  return (
    <Flex>
      <Cover
        title="Séries"
        description="O Naped pode ser sua fonte de informações sobre Séries e outros assuntos relacionados."
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
      <NavigateBetweenPages
        page={page}
        setPage={setPage}
        totalPages={cardsPagination.pages}
        previous={cardsPagination.prev}
        next={cardsPagination.next}
      />
    </Flex>
  );
};

export default Series;
