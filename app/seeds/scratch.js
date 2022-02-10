let rand = []
for (let i = 0; i < 75; i++) {
    let userResponses = []
    for (let i = 0; i < 100; i++) {
        userResponses.push(Math.floor(Math.random()*10 + 1))
    }
    rand.push(userResponses)
}

console.log(rand)
