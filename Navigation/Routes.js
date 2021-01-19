import React,  { useContext, useEffect, useState }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthContext} from "../Components/Auth/AuthProvider"
import auth from '@react-native-firebase/auth'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ConnexionStackNav from './ConnexionStackNav'


import SleyDrawer from './SleyDrawerNav'

const Drawer = createDrawerNavigator()

const Routes = () =>{

  /*componentDidMount(){
    import {Permissions, PERMISSIONS_TYPE} from './Components/AppPermissions'
    //Permissions.checkPermission(PERMISSIONS_TYPE.photo) //demande pour accéder aux photos
    //Permissions.requestMutiple(PERMISSIONS_TYPE.photo, PERMISSIONS_TYPE.microphone) //demande pour plusieurs permissions
    //Permissions.requestNotifyPermission() //Demmande pour les notifs sur iOS 
  }*/

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const {user, setUser} = useContext(AuthContext);

   // Handle user state changes
   const onAuthStateChanged = (user) =>{
    setUser(user);
    if (initializing) setInitializing(false);
  }

 // Similaire à componentDidMount et componentDidUpdate
  useEffect(()=> {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [])

  if (initializing) return null;

      return (
           <NavigationContainer>

            {user ? 
                  <SleyDrawer/>
                  : 
                  <ConnexionStackNav/>}
          

          </NavigationContainer> 
          
      );
  }




export default Routes;