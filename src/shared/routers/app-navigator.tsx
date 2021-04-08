import React, { useEffect, useState, createContext } from 'react'
import { Subject } from 'rxjs';

import { User } from '@shared/models/user';
import authService from '@shared/services/auth-service';
import strings from '@shared/translations';
import { LangCode } from '@shared/utils/localization';
import utils from '@shared/utils';
import SignInStack from './sign-in-stack';
import SignOutStack from './sign-out-stack';

export const AuthContext = createContext(null);

type LanguageAction = {
    value: LangCode
}
export const languageActions = new Subject<LanguageAction>();
const {  currentLanguage } = utils.Localization;

function AppNavigator() {

    const [user, setUser] = useState<User>(null);
    function onAuthStateChanged(result: User) {
        if (result) {
            strings.setLanguage(result.lang.substring(0, 2));
            setUser(result)
        }
    }

    useEffect(() => {
        strings.setLanguage(currentLanguage.substring(0, 2));
        const authSub = authService.onAuthStateChanged.subscribe(action => {
            onAuthStateChanged(action.user)
        })
        const langSub = languageActions.subscribe(action => {
            strings.setLanguage(action.value.substring(0, 2))
        })
        return () => {
            authSub.unsubscribe()
            return langSub.unsubscribe();
        };
    }, [])

    return user ? (
        <AuthContext.Provider value={user}>
            <SignInStack />
        </AuthContext.Provider>
    ) : (
        <SignOutStack />
    )
}

export default AppNavigator;