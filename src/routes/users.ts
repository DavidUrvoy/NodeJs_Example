import express, {Request, Response} from 'express'

let usersRouter = express.Router();

/* GET users listing. */
export default usersRouter.get('/', (_: Request, response: Response) => {
  response.send('respond with a resource');
});
