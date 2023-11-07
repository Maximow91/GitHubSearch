import cls from './MainPage.module.scss'
import {classNames} from '../../lib/classNames/classNames'

const MainPage = () => {
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
