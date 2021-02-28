import React, {useReducer, useState} from 'react';
import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore'

export const AuthContext = React.createContext();


const AlertError = (message) =>{
    Alert.alert(
        'Une erreur est survenue',
        message
    )
}

const createClient = (userConnected, data) =>{
    
    firestore().collection("Clients")
        .doc(userConnected.uid)
        .set({
            Nom : data.nom,
            Prenom: data.prenom,
            DateN : data.dateN,
            Sexe : data.sexe,
            Taille : data.taille,
            TxBase : data.txAct,
            TxCible : data.txCible,
            PoidsAct : data.poids,
            PoidsInitial : data.poids,
            Objectif:  data.idObj
            }).then(()=>{console.log("Client ajouté !")})
            .catch((err)=> console.log("Une erreur s'est produite lors de l'ajout du client: ",err))
        
     
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

                register: async (email, password, data) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
                        createClient(auth().currentUser, data)

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