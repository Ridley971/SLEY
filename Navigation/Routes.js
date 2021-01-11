import React,  { useContext, useEffect, useState }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthContext} from "../Components/Auth/AuthProvider"
import auth from '@react-native-firebase/auth'


import ConnexionStackNav from './ConnexionStackNav'
import BoutikStackNav from './BoutikStackNav'


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

            {user ? <BoutikStackNav/> : <ConnexionStackNav/>}
              {/*loginState.userToken !== null ? (
                <Drawer.Navigator
                    drawerContent={props => <DrawerContent{...props}/>}
                    drawerStyle={{
                      backgroundColor: 'rgba(255, 255, 0, 0.9)',
                      width: 240,
                    }}>
                  <Drawer.Screen name="Accueil" component={MainTabNav} />
                 <Drawer.Screen name="Reserv" component={ReservStack} />
                  <Drawer.Screen name="Tutos" component={Tutos} />
                  <Drawer.Screen name="MyReservations" component={Planning } />
                  <Drawer.Screen name="MyVotes" component={MesVotes} />
                </Drawer.Navigator>


                  ) : (

              <ConnexionStackNav/>
            )*/}
          

          </NavigationContainer>
      );
  }




export default Routes;