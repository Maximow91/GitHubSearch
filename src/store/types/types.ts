export interface Reopsitory {
  id: number
  name: string
  description: string
  language: string
  stargazers_count: number
  owner: {
    login: string
  }
}

export interface RepositoriesState {
  page: number
  hasMore: boolean
  loading: boolean
  error: string | null
  data: Reopsitory[]
}
