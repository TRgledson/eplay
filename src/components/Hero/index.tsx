import { Banner, Infos } from './styled'
import { Game } from '../../pages/Home'
import { formataPreco } from '../ProductsList'

import Button from '../Button'
import Tag from '../Tag'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>
              De <s>{formataPreco(game.prices.old)}</s>
            </span>
          )}{' '}
          {game.prices.current && (
            <>
              <br />
              Por {formataPreco(game.prices.current)}
            </>
          )}
        </p>
        {game.prices.current && (
          <Button
            type="button"
            title="Clique aqui para adicionar este jogo ao carrinho"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)

export default Hero
