import "dotenv/config";
import Setup from "./setup/index";

Setup.createServerApp();

Setup.setViewEngine();

Setup.setAppRouter();

Setup.setAppPort();

Setup.startServerApp();
