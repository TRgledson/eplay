import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="https://dummyimage.com/222x250/eee/aaa" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit harum
      facere velit, repellat commodi est.
    </Descricao>
  </Card>
)

export default Product
