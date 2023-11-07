import {useCallback, useState} from 'react'
import {useSelector} from 'react-redux'
import {TableVirtuoso} from 'react-virtuoso'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {classNames} from '../../lib/classNames/classNames'
import {
  getRepositoriesData,
  getRepositoriesHasMore,
} from '../../store/selectors'
import {repositoriesActions} from '../../store/slices/repositoriesSlice'
import cls from './RepositoriesList.module.scss'

interface RepositoriesListProps {
  className?: string
}

export const RepositoriesList = ({className}: RepositoriesListProps) => {
  const repositories = useSelector(getRepositoriesData)
  const hasMore = useSelector(getRepositoriesHasMore)

  const dispatch = useAppDispatch()

  const [page, setPage] = useState(1)

  const handleEndReached = useCallback(() => {
    if (hasMore) {
      setPage(prevPage => prevPage + 1)
      dispatch(
        repositoriesActions.loadRepositoriesPending({
          page,
          search: repositories[0].owner.login,
        }),
      )
    }
  }, [dispatch, page, hasMore, repositories])

  return (
    <div className={classNames(cls.RepositoriesList, {}, [className])}>
      <TableVirtuoso
        endReached={handleEndReached}
        className={classNames(cls.list)}
        data={repositories}
        useWindowScroll
        fixedHeaderContent={() => (
          <tr className={classNames(cls.listHeader)}>
            <th className={classNames(cls.listHeaderItem)}>Name</th>
            <th className={classNames(cls.listHeaderItem)}>Description</th>
            <th className={classNames(cls.listHeaderItem)}>Language</th>
            <th className={classNames(cls.listHeaderItem)}>Stars</th>
          </tr>
        )}
        itemContent={(index, repositories) => (
          <>
            <td key={index} className={cls.listContentItem}>
              {repositories.name}
            </td>
            <td className={cls.listContentItem}>{repositories.description}</td>
            <td className={cls.listContentItem}>{repositories.language}</td>
            <td className={cls.listContentItem}>
              {repositories.stargazers_count}
            </td>
          </>
        )}
      />
    </div>
  )
}
