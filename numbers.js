// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.


// async function getFact(num) {
//     let url = `http://numbersapi.com/${num}`;
//     let res = await axios.get(url);
//     console.log(res.data)
// }
// getFact(7)


// Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

// let url = "http://numbersapi.com/5..9";
// axios.get(url)
//     .then(res => {
//         console.log(res.data)
//     })
//     .catch( err =>  console.log("Something went wrong!"))

// async function getFacts(numOne, numTwo) {
//     let url = `http://numbersapi.com/${numOne}..${numTwo}`
//     let res = await axios.get(url);
//     let keys = Object.keys(res.data)

//     for (let key of keys) {
//         let fact = res.data[key]
//         $("body").append(`<p>${fact}</p>`)
//     }
     
// }    
// getFacts(4, 6)

// Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.


async function getFourFacts() {
    let url = "http://numbersapi.com/7"
    let fourNumberFacts = []

    for (let i = 1; i < 5; i++) {
        fourNumberFacts.push(
        axios.get(url)
    )
}
    let facts = await Promise.all(fourNumberFacts)
    console.log(facts)
    for (let fact of facts) {
        $("body").append(`<p>${fact.data}</p>`)
}
}

getFourFacts()
// (Note: You’ll need to make multiple requests for this.)