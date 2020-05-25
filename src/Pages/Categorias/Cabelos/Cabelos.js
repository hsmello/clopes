import React from 'react';
import MyPagination from '../../../Imports/MyPagination';

export default class Cabelos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            category: '',
            image: null,
            all: {},
            thisCategory: []
        }
        this.requestPost = this.requestPost.bind(this);
    }

    async requestPost() {

        try {
            const res = await fetch('http://localhost:3001/requestPost', {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            const data = await res.json()
            console.log(data)
            this.setState({
                all: data
            })

            console.log(this.state.all)



            if (!res.ok) {
                console.log('response is false')
                const awaitError = await res.json();
                throw awaitError
            }
        }

        catch (e) {
            console.log('catch error')
            console.log(e)
        }
    }

    handlePosts = () => {
        for (let i = 0; i < this.state.all.length; i++) {
            if (this.state.all[i].category === 'Entretenimento') {
                this.state.thisCategory.push(this.state.all[i])
            }
        }
        console.log(this.state.thisCategory)
    }

    sortArray = () => {
        this.state.thisCategory.sort(function (a, b) {
            if (a.date === null || b.date === null) {
                return;
            }
            return a.date.getTime() - b.date.getTime()
        })
        console.log(this.state.thisCategory)

    }


        render() {


            return (
                <div>

                    {/* {this.requestPost}
            {this.handlePosts} */}

                    <button label="test" onClick={this.requestPost}>
                        rodar api
                </button>

                    <button onClick={this.handlePosts} >
                        filtrar entretenimento
                </button>

                <button onClick={this.sortArray} >
                        sort
                </button>

                <MyPagination 
                    count={6}
                />

                </div>
            )
        };
    };