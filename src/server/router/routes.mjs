import landing from "../api/domain/landing/index.mjs"

const routes = {
    '/': async () => {
        const data = await landing.getPageData();
        return {
            layout: {
                data
            }
        }
    },
    '/yasambilim': ()=>{
        return {}
    },
    '/evrim-kurami': ()=>{
        return {}
    },
}

export default routes;
