export default ({ $axios, $store }, inject) => {
  const mathematicalApi = $axios.create({
    headers: {
      common: {
        Authorization: ''
      }
    }
  })
  mathematicalApi.setBaseURL(
    'https://gitlab.com/api/v4/projects/18845540/repository/files/'
  )
  inject('mathematicalApi', mathematicalApi)

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      $store.commit('alerts/ADD_400')
    } else if (code === 500) {
      $store.commit('alerts/ADD_500')
    } else if (code === 404) {
      $store.commit('alerts/ADD_404')
    } else if (code === 503) {
      $store.commit('alerts/ADD_503')
    } else {
      $store.commit('alerts/ADD_UNKNOWN')
    }
  })
}
