import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetEsportesGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: esportesGames } = useGetEsportesGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()

  if (
    actionGames &&
    esportesGames &&
    fightGames &&
    rpgGames &&
    simulationGames
  ) {
    return (
      <>
        <ProductsList games={actionGames} title="Ação" background="black" />
        <ProductsList
          games={esportesGames}
          title="Esportes"
          background="gray"
        />
        <ProductsList games={rpgGames} title="RPG" background="black" />
        <ProductsList games={fightGames} title="Luta" background="gray" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
