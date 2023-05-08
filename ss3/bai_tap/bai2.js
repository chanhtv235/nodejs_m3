const axios = require('axios');
async function getJSONAsync() {
    let json = await axios.get('https://jsonplaceholder.typicode.com/users');
    return json.data;
}
getJSONAsync().then(result =>console.log(result));