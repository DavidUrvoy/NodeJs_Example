import { UserRepository } from "user-repository"
import server from "./src/app"

const port = 3000

// Here is the dependency injection mecanism. It is dead simple, as a basic example, but easily works. Just inject UserLogger instead of UserRepository, and
// see how easily you can change the behavior of your app.
server({
    userAdapter: new UserRepository(),
})
    .listen(port, () => console.log(`Node service listening at http://localhost:${port}`))

export default server
