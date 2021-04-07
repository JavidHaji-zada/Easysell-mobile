/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Subject } from 'rxjs';
import AppNavigator from '@shared/routers/app-navigator';
import Utils from '@shared/utils';
import { LangCode } from '@shared/utils/localization';
const { Firebase } = Utils;

type LanguageAction = {
  value: LangCode
}
export const languageActions = new Subject<LanguageAction>();
const { supportedLanguages, currentLanguage, messages } = Utils.Localization;

function App() {
  const [curLang, setCurLang] = useState<LangCode>(currentLanguage)

  useEffect(() => {

    const langSub = languageActions.subscribe(action => {
      setCurLang(action.value)
    })
    return langSub.unsubscribe();
  }, [])

  return (
    <AppNavigator />
  )
}

export default App;