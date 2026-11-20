import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styled'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span> <br />
          Por R$ 190.00
        </p>
        <Button
          type="button"
          title="Clique aqui para adicionar este jogo ao carrinho"
          variant="primary"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
