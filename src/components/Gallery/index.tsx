import { useState } from 'react'

import Section from '../Section'
import { Items, Item, Action, Modal, ModalContent } from './styles'

import zelda from '../../assets/images/zelda.png'
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import close from '../../assets/images/fechar.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'

interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/78CP8na1Fpo?si=Q72aoeGr6hvFeJ64'
  },
  {
    type: 'image',
    url: hogwarts
  }
]

type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const closeModal = () => {
    setModal({ isVisible: false, type: 'image', url: '' })
  }

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({ isVisible: true, type: media.type, url: media.url })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} do ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              className="close"
              src={close}
              alt="Icon Exit"
              onClick={() => closeModal()}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt={`Media de ${name}`} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
