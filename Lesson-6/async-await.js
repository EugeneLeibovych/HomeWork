async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error receiving data:", error);
    }
}

function processData(data) {
    console.log("Received:", data);
}


const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
(async () => {
    const data = await fetchData(apiUrl);
    if (data) {
        processData(data);
    }
})();
