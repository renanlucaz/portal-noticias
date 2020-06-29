import Realm from 'realm';

import NewsSchema from '../schemas/NewsSchema';

export default function getRealm() {
    return Realm.open({
        schema: [NewsSchema],
    });
}
