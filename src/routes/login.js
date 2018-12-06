// create login post route
export function routes(router){
    router
        .post('/login', (req, res) => {
            //send response
            res.send('User is logged in')
        })
}