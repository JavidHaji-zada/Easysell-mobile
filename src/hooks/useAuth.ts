import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAction } from "@shared/utils";
import { User } from "@shared/models/user";
import authService from "@shared/services/auth-service";

export function useAuth() {
    const [state, dispatch] = React.useReducer(
        (state, action) => {
            switch (action.type) {
                case 'SET_USER':
                    return {
                        ...state,
                        user: { ...action.payload },
                    };
                case 'REMOVE_USER':
                    return {
                        ...state,
                        user: undefined,
                    };
                case 'SET_LOADING':
                    return {
                        ...state,
                        loading: action.payload,
                    };
                default:
                    return state;
            }
        },
        {
            user: undefined,
            loading: true,
        },
    );

    React.useEffect(() => {
        // AsyncStorage.getItem('user').then(user => {
        //     if (user) {
        //         dispatch(createAction('SET_USER', new User(JSON.parse(user))));
        //     }
        //     dispatch(createAction('SET_LOADING', false));
        // });
        const authSub = authService.onAuthStateChanged.subscribe(async action => {
            console.log('here')
            const { user, type } = action;
            switch (type) {
                case "login": {
                    // await AsyncStorage.setItem('user', JSON.stringify(user));
                    dispatch(createAction('SET_USER', user));
                }
                case "logout": {
                    // await AsyncStorage.removeItem('user');
                    dispatch(createAction('REMOVE_USER', {}));
                }
                case "register": {
                    // await AsyncStorage.setItem('user', JSON.stringify(user));
                    dispatch(createAction('SET_USER', user));
                }
            }
        })
        return () => {
            authSub.unsubscribe()
        };
    }, []);
    return { state };
}