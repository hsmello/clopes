import { extendObservable } from 'mobx';

class PostStore {
    constructor() {
        extendObservable(this, {
            title: '',
            categoria: '',
            body: '',
            image: ''
        })
    }
}

export default new PostStore();