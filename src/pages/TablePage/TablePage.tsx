import {useSelector} from 'react-redux'
import {
  getRepositoriesData,
  getRepositoriesLoading,
} from '../../store/selectors'
import {classNames} from '../../lib/classNames/classNames'
import {Loader} from '../../components/Loader/Loader'
import {RepositoriesList} from '../../components/RepositoriesList/RepositoriesList'

import cls from './TablePage.module.scss'

const TablePage = () => {
  const loading = useSelector(getRepositoriesLoading)
  const data = useSelector(getRepositoriesData)

  return (
    <div className={classNames(cls.TablePage)}>
      <h1>{data[0].owner.login}</h1>
      <RepositoriesList />
      {loading && (
        <div>
          <Loader />
        </div>
      )}
    </div>
  )
}

export default TablePage
