import cls from './MainPage.module.scss'
import {classNames} from '../../lib/classNames/classNames'
import {Octokit} from '@octokit/core'
import {useEffect} from 'react'

const MainPage = () => {
  const octokit = new Octokit({
    auth: `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`,
  })

  const getRepos = async () => {
    const response = await octokit.request('GET /orgs/facebook/repos', {
      org: 'octokit',
      type: 'all',
    })

    console.log(response)
  }

  useEffect(() => {
    getRepos()
  }, [])

  return (
    <div className={classNames(cls.MainPage)}>
      <h1>GitHubSearch</h1>
      <div className={cls.searchContainer}>
        <input
          type='text'
          className={cls.searchInput}
          placeholder='Поиск репозиториев...'
        />
        <button className={cls.searchButton}>Поиск</button>
      </div>
    </div>
  )
}

export default MainPage
