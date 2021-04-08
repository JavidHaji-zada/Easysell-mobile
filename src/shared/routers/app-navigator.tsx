import React, { useEffect, useState, createContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { User } from '@shared/models/user';
import authService from '@shared/services/auth-service';
import SignInStack from './sign-in-stack';
import SignOutStack from './sign-out-stack';
import strings from '@shared/translations';

const Stack = createStackNavigator();
export const AuthContext = createContext(null);

function AppNavigator() {
    const [user, setUser] = useState<User>(null);
    function onAuthStateChanged(result: User) {
        setUser(result)
        if (result) {
            strings.setLanguage(result.lang.substring(0, 2));
        }
    }

    useEffect(() => {
        const authSub = authService.onAuthStateChanged.subscribe(action => {
            onAuthStateChanged(action.user)
        })
        return () => {
            authSub.unsubscribe()
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