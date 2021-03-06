import axios from 'axios'

class User {

    URI = process.env.REACT_APP_URI

    async SignUp(data) {
        return await axios.post(this.URI + '/users/signup', data)
    }

    async SignIn(data) {
        return await axios.post(this.URI + '/users/signin', data)
    }

    async getUser(token) {
        return await axios.get(this.URI + '/users/getUser', { headers: { "x-token": token } })
    }

}

export default User