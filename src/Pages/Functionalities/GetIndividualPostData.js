async function GetIndividualPostData(postLink) {

    try {
        const res = await fetch('http://localhost:3001/requestPost?postLink=' + postLink, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const data = await res.json()
        return data;
    }

    catch(e) {
        console.log('catch error')
        console.log(e)
    }
    
    return;

}

export default GetIndividualPostData;