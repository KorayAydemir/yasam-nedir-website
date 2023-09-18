import express from "express"
import ejs from 'ejs';
import router from "../router/index.mjs"

class Setup {
    constructor() {
    }

    createServerApp() {
        try {
            console.log('Creating server app')
            this.app = express()
            this.app.use('/build', express.static('build') );
            this.app.use('/public', express.static('public') );
        } catch (e) {
            console.error(
                e,
                "Couldn't create the express app"
            )
        }
    }

    setViewEngine() {
        console.log('Setting view engine')
        this.app.engine('ejs', ejs.__express)
        this.app.set("view engine", "ejs")
        this.app.set("views", 'build/views')
    }

    setAppRouter() {
        console.log('Setting app router')
        this.app.use('/', router)
    }

    setAppPort() {
        try {
            this.app.set('port', process.env.PORT);
        } catch(e) {
            this.setErrorBoundaryVariables(
                e,"Couldn't set server port."
            );
        } 
    }

    startServerApp() {
        try {
            this.app.listen(
                this.app.get('port'),
                () => {
                    console.log(
                        `---------- Server is running on port ${this.app.get('port')}. ----------`
                    );
                }
            );
        } catch {
            console.error(
                e,"Couldn't start the express app"
            )
        }
    }

}

export default new Setup;
