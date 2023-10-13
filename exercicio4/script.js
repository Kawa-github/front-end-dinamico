// let url = "https://jokeapi.dev/joke/Any?lang=en"
// let div_joke = document.querySelector("#div_joke")
// let pergunta = document.querySelector("#ask")
// let resposta = document.querySelector("#answer")
// let btn_obter = document.querySelector("#btn_search")

// async function getJoke() {
// try {
// const response = await fetch(url);
// const data = await response.json();

// console.log(data.setup)
// console.log(data.delivery)

// return { setup: data.setup, delivery: data.delivery }; // Retorna o objeto de piada completo
// } catch (error) {
// throw new Error("Não foi possível obter uma piada.");
// }
// }


// // btn_obter.addEventListener("click", getJoke())


// function showJoke(joke) {
// pergunta.value = joke.setup;
// resposta.value = joke.delivery;
// }

// btn_obter.addEventListener("click", async () => {
// try {
//   btn_obter.disabled = true;
//   const joke = await getJoke(); // Espere a Promise ser resolvida
//   showJoke(joke);
// } catch (error) {
//   console.log(error);
// }
// });
