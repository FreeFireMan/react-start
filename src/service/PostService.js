export class PostService {

    url = 'https://jsonplaceholder.typicode.com/posts'

    getAllPost(){
        return  fetch(this.url)
            .then(value => value.json())
            .then(value => {return value})
    }
    getPostById(id){
        return fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value)
    }
}