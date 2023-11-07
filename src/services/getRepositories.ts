import {Octokit} from '@octokit/core'

const octokit = new Octokit({})

export const getRepositories = async (search: string, page?: number) => {
  const response = await octokit.request(`GET /orgs/${search}/repos`, {
    type: 'all',
    page: page,
    per_page: 15,
  })

  return response.data
}
