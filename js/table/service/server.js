const GetDataFromServer = function() {
    let url = 'https://mate-academy.github.io/phone-catalogue-static/phones/phones.json'
    return fetch(url)
        .then(response => response.json());
}

export default GetDataFromServer;