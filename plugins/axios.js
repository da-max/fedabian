export default ({ $axios, error }, inject) => {
  const mathematicsApi = $axios.create({
    headers: {
      common: {
        'PRIVATE-TOKEN': process.env.MATHEMATICS_GITLAB_TOKEN
      }
    }
  })
  mathematicsApi.setBaseURL(
    'https://gitlab.com/api/v4/projects/18845540/repository/files/'
  )
  inject('mathematicsApi', mathematicsApi)

  $axios.onError((err) => {
    const code = parseInt(err.response && err.response.statusCode)
    const content = String(err.response && err.response.statusText)
    error({
      statusCode: code,
      message: content
    })
  })
}
