import React from 'react';

export default new class GetPostData extends React.Component {
    constructor() {
        super();
        this.state = {
            dataAPI: {},
        }
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
            this.setState({ dataAPI: data })

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

    render() {
        return (
            this.requestPost()
            );
    }
}