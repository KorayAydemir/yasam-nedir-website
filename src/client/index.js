import { createRoot } from "react-dom/client";
import App from "../app/infrastructure/views/app/index.js";

const root = createRoot(document.getElementById("root"));

root.render(<App />)
