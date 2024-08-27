import React, { useContext } from 'react'
import styled from 'styled-components'
import { IoTrashOutline } from 'react-icons/io5'
import { BiEditAlt } from 'react-icons/bi'
import { FcOpenedFolder } from 'react-icons/fc'
import logo from '../../assets/logo-small.png'
import { ModalContext } from '../../context/ModalContext'
import { PlaygroundContext } from '../../context/PlaygroundContext'
import { useNavigate } from 'react-router-dom'

const StyledRightComponent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    padding: 2rem;

    @media (max-width: 768px){
        position: relative;
        width: 100%;
        padding: 1rem 0.5rem;
    }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #989898;
  margin-bottom: 1rem;
`

const Heading = styled.h3`
  font-size: ${props => props.size === 'small' ? "1.25rem" : "1.75rem"};
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span{
    font-weight: 700;
  }
`

const AddButton = styled.div`
    font-size: 1rem;
    border-radius: 30px;
    color: black;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    span{
        font-size: 1.5rem;
        font-weight: 700;
    }

    &:hover{
        cursor: pointer;
    }
        /* From Uiverse.io by lenfear23 */ 
button {
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  width: 150px;
  height: 50px;
  background-image: linear-gradient(to top, #D8D9DB 0%, #fff 80%, #FDFDFD 100%);
  border-radius: 30px;
  border: 1px solid #8F9092;
  transition: all 0.2s ease;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #606060;
  text-shadow: 0 1px #fff;
}

button:hover {
  box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 3px 3px #CECFD1;
}

button:active {
  box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
}

button:focus {
  box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
}



`

const FolderCard = styled.div`
    margin-bottom: 1rem;
`

const FolderIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    cursor: pointer;
`

const PlayGroundCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 428px){
        grid-template-columns: 1fr;
    }    
`

const Card = styled.div`
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0 0 4px 0px #989898;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
      scale: 1.05;
      box-shadow: 0 0 8px 0px #989898;
    }
`

const CardContainer = styled.div`
  display: flex;
  align-items: center;
`

const CardContent = styled.div`
`

const Logo = styled.img`
    width: 70px;
    margin-right: 1rem;

    @media (max-width: 425px){
        width: 50px;
        margin-right: 0.5rem;
    }
`
const RightComponent = () => {
  const navigate = useNavigate();

  const { openModal } = useContext(ModalContext);
  const { folders, deleteFolder, deleteCard } = useContext(PlaygroundContext);

  return (
    <StyledRightComponent>
      <Header>
        <Heading size="large">
        𝐌𝐘 <span> 𝐏𝐥𝐚𝐲𝐆𝐫𝐨𝐮𝐧𝐝</span>
        </Heading>
        <AddButton onClick={() => openModal({
          show: true,
          modalType: 1,
          identifiers: {
            folderId: "",
            cardId: "",
          }
        })}> <span></span> 
        <button>
           + New Folder
        </button></AddButton>
      </Header>

      {
        Object.entries(folders).map(([folderId, folder]) => (
          <FolderCard key={folderId}>
            <Header>
              <Heading size="small">
                <FcOpenedFolder /> {folder.title}
              </Heading>
              <FolderIcons>
                <IoTrashOutline onClick={() => deleteFolder(folderId)} />
                <BiEditAlt onClick={() => openModal({
                  show: true,
                  modalType: 4,
                  identifiers: {
                    folderId: folderId,
                    cardId: "",
                  }
                })} />
                <AddButton onClick={() => openModal({
                  show: true,
                  modalType: 2,
                  identifiers: {
                    folderId: folderId,
                    cardId: "",
                  }
                })}><span>+</span> New Playground</AddButton>
              </FolderIcons>
            </Header>

            <PlayGroundCards>
              {
                Object.entries(folder['playgrounds']).map(([playgroundId, playground]) => (
                  <Card key={playgroundId} onClick={() => {
                    navigate(`/playground/${folderId}/${playgroundId}`)
                  }}>
                    <CardContainer>
                      <Logo src={logo} />
                      <CardContent>
                        <p>{playground.title}</p>
                        <p>Language: {playground.language}</p>
                      </CardContent>
                    </CardContainer>
                    <FolderIcons onClick={(e) => {
                      e.stopPropagation(); //stop click propagation from child to parent
                    }}>
                      <IoTrashOutline onClick={() => deleteCard(folderId, playgroundId)} />
                      <BiEditAlt onClick={() => openModal({
                        show: true,
                        modalType: 5,
                        identifiers: {
                          folderId: folderId,
                          cardId: playgroundId,
                        }
                      })} />
                    </FolderIcons>
                  </Card>
                ))
              }
            </PlayGroundCards>
          </FolderCard>
        ))
      }
    </StyledRightComponent>
  )
}

export default RightComponent;