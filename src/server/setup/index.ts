import express, { Application } from "express"
import ejs from 'ejs';
import router from "../router/index"

class Setup {
    private app: Application;
    constructor() {
        this.app = express(); 
    }

    createServerApp() {
        try {
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
        try {
            this.app.engine('ejs', ejs.renderFile)
            this.app.set("view engine", "ejs")
            this.app.set("views", 'build/views')
        } catch(e) {
            console.error(e, "Couldn't set the view engine")
        }
    }

    setAppRouter() {
        try {
            this.app.use('/', router)
        } catch(e) {
            console.error(
                e,"Couldn't set the app router"
            )
        }
    }

    setAppPort() {
        try {
            this.app.set('port', process.env.PORT);
        } catch(e) {
            console.error(
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
        } catch(e) {
            console.error(
                e,"Couldn't start the express app"
            )
        }
    }

}

export default new Setup;
