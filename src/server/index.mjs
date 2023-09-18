import 'dotenv/config'

import Setup from "./setup/index.mjs"

Setup.createServerApp()

Setup.setViewEngine()

Setup.setAppRouter()

Setup.setAppPort()

Setup.startServerApp()
