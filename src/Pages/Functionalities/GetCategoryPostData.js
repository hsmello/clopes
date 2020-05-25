async function GetCategoryPostData(category) {

    try {
        const res = await fetch('http://localhost:3001/requestCategory?category=' + category, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }); 
        const data = await res.json()
        return data;
    }

    catch (e) {
        console.log('catch error')
        console.log(e)
    }

    return;
}

export default GetCategoryPostData;