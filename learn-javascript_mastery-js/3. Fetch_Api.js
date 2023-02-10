// GET
fetch('https://reqres.in/api/users')
    .then(res => res.json())
    // .then(data => console.log(data)) all data
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

// ERROR 
// fetch('https://reqres.in/api/users/23')
//     .then(res => {
//         if (res.ok) {
//             console.log('succes')
//         } else {
//             console.log('not succes')
//         }
//     })
//     // .then(data => console.log(data)) all data
//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR')) // NOT WORK CAUSE FETCH ALWAYS SUCCESS

// POST
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-type' : 'application/json'
    },
    body: JSON.stringify({
        name: 'chainztsy'
    })
}).then(res => {
        return res.json()
    })
    // .then(data => console.log(data)) all data
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
