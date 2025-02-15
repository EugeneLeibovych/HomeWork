function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

function processData(data) {
    console.log("Received:", data);

}

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
fetchData(apiUrl)
    .then(data => processData(data))
    .catch(error => console.error("Error receiving data:", error));
