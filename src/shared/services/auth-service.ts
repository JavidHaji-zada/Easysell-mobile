import { Subject } from 'rxjs'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { User } from '@models/user'
import firebase from '@utils/firebase'
import { LangCode } from '@utils/localization'
import UserService from '@services/user-service'

class AuthService {
    onAuthStateChanged: Subject<AuthAction> = new Subject();
    async register(email: string, password: string, firstname: string, lastname: string, lang: LangCode) {
        try {
            let res = await auth().createUserWithEmailAndPassword(email, password)
            console.log('res ', res)
            //TODO save user to firestore
            let currentUser = {
                firstname,
                lastname,
                lang,
                email,
                _id: res.user?.uid
            }
            await firestore().collection('users').doc(currentUser._id).set({ firstname, lastname, lang, email, _id: res.user?.uid })
            UserService.currentUser = new User(currentUser)
            this.onAuthStateChanged.next({
                type: 'register',
                user: new User(currentUser)
            })
            return { result: "success" }
        } catch (err) {
            console.log('err ', err)
            throw err
        }
    }

    async signIn(email: string, password: string) {
        try {
            let res = await firebase.auth().signInWithEmailAndPassword(email, password)
            return this.getUserData().then(user => {
                this.onAuthStateChanged.next({
                    type: 'login',
                    user
                })
                return user
            })
        } catch (err) {
            console.log('login err ', err)
            throw err
        }
    }
    async Logout() {
        try {
            let res = await firebase.auth().signOut();
            this.onAuthStateChanged.next({
                type: 'logout',
                user: null
            })
            console.log("logout successfull");
        } catch (err) {
            throw err
        }
    }

    async getUserData(): Promise<User> {
        let currentUser = firebase.auth().currentUser
        try {
            let userDoc = await firebase.firestore().collection('users').doc(currentUser.uid).get()
            if (userDoc.exists) {
                let user = new User(userDoc.data())
                return user
            }
        } catch (err) {
            throw err
        }
    }

}

export type AuthAction = {
    type: "login" | "logout" | "register"
    user: User
}

export default new AuthService();