import { addUserData, fetchUser, fetchWhare } from './actions'
import store from './store'

export async function cacheUser (useAuth0, state) {
  // TODO: call the useAuth0 and destructure:
  // isAuthenticated, getAccessTokenSilently and user
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0()

  if (isAuthenticated && !state?.token) {
    try {
      const token = await getAccessTokenSilently()
      const userToSave = {
        auth0Id: user.sub,
        email: user.email,
        token: token
      }
      store.dispatch(addUserData(userToSave))
      store.dispatch(fetchUser(userToSave))
      store.dispatch(fetchWhare(userToSave))
    } catch (err) {
      console.error(err)
    }
  }
}
