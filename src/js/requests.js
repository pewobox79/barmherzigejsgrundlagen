const BASE_URL = 'https://jsonplaceholder.typicode.com'

function getData(){ 

    const url = `${BASE_URL}/todos`
    
    return fetch(url).then(res => {

        if(!res.ok){
            return 'no data - issue'
        } else {

            return res.json()
        }
    })
}

getData().then(data => {
    data.forEach((todo) => {
        const {title, completed} = todo
        createToDoElement(title, completed)
    })
})

