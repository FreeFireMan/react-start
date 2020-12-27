export default class userService{
    url = 'https://jsonplaceholder.typicode.com/users'

    getUsers(){
        return  fetch(this.url).then(value => value.json())
    }
}