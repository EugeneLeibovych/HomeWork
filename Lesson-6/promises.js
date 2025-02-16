function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error ("Error receiving data", error);
            throw error;
        });
}

function processData(data) {
    console.log("Received:", data);

}

function fetchAndProcessData(url) {
    fetchData(url)
        .then(data => processData(data))
        .catch(error => console.error("Error in fetchAndProcessData:", error));
}

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
fetchAndProcessData(apiUrl);

