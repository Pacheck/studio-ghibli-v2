import { Link } from 'react-router-dom';
import { useRequest } from "../../hooks/useRequest"
import { Card } from '../../components/card';
import { Container, Wrapper, LinkContainer } from "./styles";

export function Home() {
  const [filmsArray, setFilmsArray] = useRequest('/films');

  return (
    <Wrapper>
      <Container>
        {
          filmsArray.length > 0 && filmsArray.map(film => (
            <Card key={film.title}>
              <img src={film.image} alt="movie"/>
              <LinkContainer>
                <Link to="/">Ver mais</Link>
              </LinkContainer>
            </Card>
          ))
        }
      </Container>
    </Wrapper>
  )
}