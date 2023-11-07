import {Octokit} from '@octokit/core'

const octokit = new Octokit({auth: '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'})

export const getRepositories = async (search: string, page?: number) => {
  const response = await octokit.request(`GET /orgs/${search}/repos`, {
    type: 'all',
    page: page,
    per_page: 15,
  })

  return response.data
}
