import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {classNames} from '../../lib/classNames/classNames'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {repositoriesActions} from '../../store/slices/repositoriesSlice'
import {
  getRepositoriesError,
  getRepositoriesLoading,
} from '../../store/selectors'
import {Loader} from '../../components/Loader/Loader'

import cls from './MainPage.module.scss'

const MainPage = () => {
  const dispatch = useAppDispatch()
  const error = useSelector(getRepositoriesError)
  const loading = useSelector(getRepositoriesLoading)
  const [inputValue, setInputValue] = useState<string>('')

  const navigate = useNavigate()

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(repositoriesActions.loadRepositoriesReject(''))
      }, 3000)
    }
  }, [error])

  const handleClick = () => {
    if (inputValue) {
      dispatch(
        repositoriesActions.loadRepositoriesPending({
          search: inputValue,
          page: 1,
          navigate,
          initial: true,
        }),
      )
      setInputValue('')
    }
  }

  return (
    <div className={classNames(cls.MainPage)}>
      <h1>GitHubSearch</h1>
      <div className={cls.searchContainer}>
        <input
          value={inputValue}
          onChange={onTextChange}
          type='text'
          className={cls.searchInput}
          placeholder='Поиск репозиториев...'
        />
        <button
          onClick={handleClick}
          className={classNames(cls.searchButton, {
            [cls.disabled]: error || loading,
          })}>
          Поиск
        </button>
      </div>
      {loading && <Loader />}
      {error && <h2>{error}</h2>}
    </div>
  )
}

export default MainPage
