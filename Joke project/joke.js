        const joke = document.getElementById("joke");
        const jokebtn = document.getElementById("jokebtn");
        const loading = document.getElementById("jok");
        const getNextJoke = () => {

            const settings = {
                headers: {
                    Accept: "application/json"
                }
            }
            fetch("https://icanhazdadjoke.com/", settings)
                .then((response) => response.json())
                .then((data) => {
                    joke.innerHTML = data.joke
                    loading.innerHTML = ""
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        jokebtn.addEventListener('click', getNextJoke);