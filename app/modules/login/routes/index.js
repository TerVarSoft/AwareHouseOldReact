import Login from '../containers/Login'

export default (store) => {
  return {
    path: '/login',
    component: {
      content: Login
    }
  }
}
