// import dependencies
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import bodyparser from 'body-parser'
import * as swagger from 'swagger2';

//import routes
import { routes as registerRoute} from './routes/register'
import { routes as loginRoute} from './routes/login'

//initialize express
const app = express()

//use express router module
const router = express.Router()

//use body parser to parse request body
app.use(bodyparser())

//load swagger file
const spec = swagger.loadDocumentSync('./src/swagger.yaml')

//check if swagger file is valid
if (!swagger.validateDocument(spec)) {
    throw Error(`Invalid Swagger File`);
}

//map imported routes
for (const routes of [
    registerRoute,
    loginRoute
]){
    routes(router)
}

//use swaggerui
app.use('/', swaggerUi.serve)
app.get('/', swaggerUi.setup(spec));
router.get('/swagger.json',(req, res)=>{res.send(spec)})

//user router
app.use('/v1',router)
app.listen(5000, () => console.log(`Example app listening on port 5000!`))