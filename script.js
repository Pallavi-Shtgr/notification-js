let isOnline = true;

const checkConnection = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        isOnline = response.status >= 200 && response. status < 300;
        console.log(response);

    } catch (error) {
        console.error(error);
    }
}

setInterval(checkConnection, 3000);
