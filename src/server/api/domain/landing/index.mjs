import { sanityApi } from "../../../api/fetch.mjs";

class Landing {
    constructor() {
        this.name = 'Landing';
    }

    async getPageData() {
        const data = await sanityApi.fetch(`*[_type in ["settings"]]`);
        return data;
    }
}

export default new Landing();
