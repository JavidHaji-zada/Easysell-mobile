import LocalizedStrings from 'localized-strings';

import en from '@translations/eng.json';
import tr from '@translations/tr.json';
import az from '@translations/az.json'

let strings = new LocalizedStrings({
    en,
    tr,
    az
})

strings.setLanguage('tr');
export default strings;