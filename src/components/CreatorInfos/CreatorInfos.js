import CreatorInfosContainer from "./CreatorInfos.styles"

const CreatorInfos = () => {
  return (
    <CreatorInfosContainer>
      <p>
        Esta lista de tarefas foi desenvolvida com <span>♥</span> por <a href="https://projetoslucasbargas.com/" target="_blank" rel="noopener noreferrer">Lucas Bargas</a>
      </p>
      <a href="https://github.com/LucasBargas/todo_list" target="_blank" rel="noopener noreferrer">Clique aqui para visualizar o repositório no GitHub</a>
    </CreatorInfosContainer>
  )
}

export default CreatorInfos