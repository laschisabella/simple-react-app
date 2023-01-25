import RepositoryItem from './RepositoryItem'
import '../styles/repositories.css'
import { useEffect, useState } from 'react'


export default function RepositoryList() {

  const [repositories, setRepositories] = useState([])

  // Calling a API
  useEffect(() => {
     fetch('https://api.github.com/users/laschisabella/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>
      <ul>
        {
          repositories.map(repository => {
            return <RepositoryItem repository= {repository}/>
          })
        }
      </ul>
    </section>
  )
}