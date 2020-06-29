export default class NewsSchema {
    static schema = {
        name: 'News',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            title: 'string',
            author: 'string',
            content: 'string',
        },
    };
}
