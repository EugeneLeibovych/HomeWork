async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.warn(`Error! Unable to receive ${url}:`, error.message);
        return null;
    }
}

async function getData() {
    const primaryUrl = "https://nonexistent-api.com/data";
    const fallbackUrl = "https://jsonplaceholder.typicode.com/posts/1";

    let data = await fetchData(primaryUrl);
    if (!data) {
        console.log("Redirection on reserve domain...");
        data = await fetchData(fallbackUrl);
    }

    if (!data) {
        throw new Error("Unable to received data from reserve domain");
    }

    console.log("Received data:", data);
}

getData().catch(error => console.error("Fatal Error", error.message));
