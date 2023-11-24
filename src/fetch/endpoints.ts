interface Query {
    query: string;
}

interface Endpoints {
    [key: string]: Query;
}

export const endpoints: Endpoints = {
    getSettings: {
        query: `*[_type in ["settings"]]`,
    },
    getLanding: {
        query: `*[_type in ["settings"]]`,
    },
};
