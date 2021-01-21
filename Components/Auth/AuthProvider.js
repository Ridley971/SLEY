import React, {useState} from 'react';
import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native';

export const AuthContext = React.createContext();

const AlertError = (message) =>{
    Alert.alert(
        'Une erreur est survenue',
        message
    )
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user, 
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch (error) {

                        switch (error.code) {
                            case 'auth/user-not-found':
                            case 'wrong-password':
                                AlertError("L'adresse email ou le mot de passes est invalide")

                            case 'auth/user-disabled':
                                
                                AlertError('Ce compte a été désactivé veuillez nous conctacter !')
                                break;
                            
                            case 'auth/invalid-email':
                                AlertError('Cette adresse email est invalide')
                        
                            default:
                                AlertError(error)
                                break;
                        }

                        

                    }
                },

                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
                    } catch (error) {
                        if(error.code ==='auth/email-alreadey-in-use'){
                            AlertError('Cette adresse email est déjà utilisée')
                        }
                        if(error.code ==='auth/invalid-email'){
                            AlertError('Cette adresse email est invalide')
                        }

                        AlertError(error)
                    }
                },

                logout: async ()=>{
                    try {
                        auth().signOut()
                    } catch (error) {
                        console.log(error)
                    }
                }

            }}>
                {children}
        </AuthContext.Provider>
    )
}