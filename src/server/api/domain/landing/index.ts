class Landing {
    name: string;
    constructor() {
        this.name = 'Landing';
    }

    async getPageData() {
        //const data = await sanityClient.fetch(`*[_type in ["settings"]]`);
        //return data;
    }
}

export default new Landing();
