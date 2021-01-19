import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from "../Components/CustomComponent/DrawerContent"

import Tutos from '../Components/Training/Tutos'
import MesVotes from '../Components/Training/MesVotes'
import MainTabNav from './MainTabNav' //import MainTabNav from './MaterialBottomTab'
import PlanningMyReserv from "../Components/Planning"
import Visio from '../Components/Visio'


const Drawer = createDrawerNavigator();

export default function SleyDrawerNav() {
  return (
        <Drawer.Navigator
        drawerContent={props => <DrawerContent{...props}/>}
        drawerStyle={{
          backgroundColor: 'rgba(255, 255, 0, 0.9)',
          width: 240,
        }}>
          <Drawer.Screen name="Accueil" component={MainTabNav} />

          
          <Drawer.Screen name="Tutos" component={Tutos} />
          <Drawer.Screen name="MyVotes" component={MesVotes} />
          <Drawer.Screen name="MyReservations" component={PlanningMyReserv } />
          <Drawer.Screen name="Visio" component={Visio } />
          {/*<Drawer.Screen name="Reserv" component={ReservStack} />*/}
      </Drawer.Navigator> 
  );
}
