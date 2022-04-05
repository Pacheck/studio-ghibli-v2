import LogoImg from '../../../assets/logo.png';
import { Container, Logo, List, ListItem } from './styles'

const listItems = ['Filmes', 'Personagens', 'Espécies', 'Locais', 'Veículos'];

export function Navbar() {
  return (
    <Container role='navbar' aria-label='navbar'>
      <Logo src={LogoImg} alt="Ghibli studio" />
      <section>
        <List>
          {
            listItems.map(listItemNome => <ListItem key={listItemNome}>{listItemNome}</ListItem>)
          }
        </List>
      </section>
    </Container>
  )
}