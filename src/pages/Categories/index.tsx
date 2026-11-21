import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

const Categories = () => {
  const [gamesAcao, setgamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setgamesEsportes] = useState<Game[]>([])
  const [gamesRpg, setgamesRpg] = useState<Game[]>([])
  const [gamesLuta, setgamesLuta] = useState<Game[]>([])
  const [gamesSimulacao, setgamesSimulacao] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setgamesAcao(res))

    fetch('https://api-ebac.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setgamesEsportes(res))

    fetch('https://api-ebac.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setgamesRpg(res))

    fetch('https://api-ebac.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setgamesLuta(res))

    fetch('https://api-ebac.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setgamesSimulacao(res))
  }, [])
  return (
    <>
      <ProductsList games={gamesAcao} title="Ação" background="black" />
      <ProductsList games={gamesEsportes} title="Esportes" background="gray" />
      <ProductsList games={gamesRpg} title="RPG" background="black" />
      <ProductsList games={gamesLuta} title="Luta" background="gray" />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
      />
    </>
  )
}

export default Categories
