import Card from "../../Components/Card/Card";
import Cover from "../../Components/Cover/Cover";
import Loading from "../../Components/Helper/Loading/Loading";
import Categories from "../../Components/Layouts/Categorys/Categories";
import Flex from "../../Components/Layouts/Flex/Flex";
import useCategoryData from "../../Hooks/useCategoryData";
import { useDataContext } from "../../Store/Context/DataContext";


const Animes = () => {
  const { data, loading, error } = useDataContext();
  const newData = useCategoryData(data, "animes");

  if (loading) return <Loading />;
  if (!newData) return null;

  return (
    <Flex>
      <Cover
        title="Animes"
        description="O Naped pode ser sua fonte de informações sobre Animes e outros assuntos relacionados."
        image={newData.map((item) => item.images[0])}
        slideStart={0}
        slideEnd={newData.length}
      />
      <Categories>
        {newData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            images={item.images}
            title={item.title}
            info={item.info}
          />
        ))}
      </Categories>
    </Flex>
  );
};

export default Animes;