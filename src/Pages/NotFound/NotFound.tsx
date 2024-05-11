import styles from "./NotFound.module.css";
import Button from "../../Components/Form/Button/Button";
import Svg_404 from "../../assets/Svg_404";
import Flex from "../../Components/Layouts/Flex/Flex";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  function navigateTo(event: React.PointerEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/');
  }

  return (
    <section className={styles.NotFound}>
      <Flex classStyle={styles.content_1}>
        <div>
          <h1>Tenho más notícias para você!</h1>
          <p>
            A página que você está procurando pode ter sido removida ou está
            temporariamente indisponível.
          </p>
        </div>
        <Button
          label="Voltar a home"
          aria-label="Botão para voltar a página inicial"
          Arrow="left"
          classStyle={styles.configButton}
          onPointerDown={(e)=> navigateTo(e)}
        />
      </Flex>
      <Flex classStyle={styles.content_2}>
        <Svg_404 />
        <p>Ups! Você chegou no espaço... volte para o mundo nerd!</p>
      </Flex>
    </section>
  );
};

export default NotFound;
