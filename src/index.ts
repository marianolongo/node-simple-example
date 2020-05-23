import { App } from "./app";
import http from "http";

async function main() {
    const port = "8000";
    const app = new App(port);
    const server = http.createServer(app.app);
    await server.listen(app.app.get('port'), () => console.log(`Server running on port ${app.app.get('port')}!`))
}

main();
