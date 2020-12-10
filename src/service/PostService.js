export default class PostService {

    url = 'https://jsonplaceholder.typicode.com/posts'

    async getAllPost(){
        return await fetch(this.url).then(value => value.json())
    }

}