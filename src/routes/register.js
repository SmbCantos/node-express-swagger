//create register post route
export function routes(router){
    router
        .post('/register', async (req, res) => {
            //send response
            res.send('User is Registered')
        })
}