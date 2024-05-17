import React from "react";
import Cover from "../../Components/Cover/Cover";
import Loading from "../../Components/Helper/Loading/Loading";
import Categories from "../../Components/Layouts/Categories/Categories";
import Flex from "../../Components/Layouts/Flex/Flex";
import Search from "../../Components/Search/Search";
import useCategoryData from "../../Hooks/useCategoryData";
import { useDataContext } from "../../Store/Context/DataContext";
import ErrorComponent from "../../Components/Helper/ErrorComponent/ErrorComponent";
import usePaginate from "../../Hooks/usePaginate";
import NavigateBetweenPages from "../../Components/NavigateBetweenPages/NavigateBetweenPages";

const Animes = () => {
  const { data, loading, error } = useDataContext();
  const allItemsInCategory = useCategoryData(data, "animes");
  const [search, setSearch] = React.useState("");
  const newData = useCategoryData(data, "animes", search);
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
        title="Animes"
        description="O Naped pode ser sua fonte de informações sobre Animes e outros assuntos relacionados."
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
        firstPage={cardsPagination.first}
        lastPage={cardsPagination.last}
      />
    </Flex>
  );
};

export default Animes;
