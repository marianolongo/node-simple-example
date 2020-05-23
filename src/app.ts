import express, {Application} from 'express';
import Routes from "./routes/routes";

export class App {

    public app: Application;
    constructor(port: string) {
        this.app = express();
        this.app.set('port', port);
        this.middlewares();
        this.routes();
    }

    routes(){
        this.app.use('', Routes);
    }

    middlewares() {
        this.app.use(express.json());
    }
}
