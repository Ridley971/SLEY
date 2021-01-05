import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import { CheckBox } from 'react-native-elements';
//https://github.com/oblador/react-native-collapsible
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import horaires from '../../Helpers/horaires'

import SleyBackground from '../CustomComponent/SleyBackground'

const SELECTORS = [
  {
    title: 'First',
    value: 0,
  },
  {
    title: 'Third',
    value: 2,
  },
  {
    title: 'None',
  },
];

export default class App extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    checked:false,
    jours:[[],[],[],[],[],[],[],]
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={1000}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.jour}</Text>
      </Animatable.View>
    );
  };


isChecked =(idJour, debut) =>
  {
    const updateJours =  [...this.state.jours]
    const selected = this.state.jours[idJour].includes(debut);
    //Si le tableau contient l'horaires on le supprime
    if(selected)
    {
      updateJours[idJour] = updateJours[idJour].filter(hor => hor !== debut)
      this.setState(prevState => ({jours : updateJours }))
    }
    //Sinon on l'ajout au state
    else {
      updateJours[idJour]= [...updateJours[idJour],debut ]
      this.setState(prevState => ({jours: updateJours}))

    }

  }

  renderContent = (section, _, isActive) => {
    //Affiche les horaires du jour sélectionné
    const hor= section.horaires
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
      {Object.keys(hor).map(key => {
        return (

          <CheckBox
            style={styles.headerText}
            title= {"De: "+ hor[key].debut +" à "+ hor[key].fin }
            //Si horaire de debut est sélectionné
            checked={this.state.jours[section.id].includes(hor[key].debut) ? true : false}

            onPress={() => {this.isChecked(section.id,hor[key].debut)} }
          />)
      })}
      </Animatable.View>
    );
  }

  render() {
    const { activeSections } = this.state;

    console.log(activeSections);
    return (
      <SleyBackground style={styles.container}>
        <Text style={styles.title}>Accordion Example</Text>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <View style={styles.selectors}>

          {/*Permet de choisir la selection a ouvrir*/}
            {
              SELECTORS.map(selector => (
              <TouchableOpacity
                key={selector.title}
                onPress={() => this.setSections([selector.value])}
              >
                <View style={styles.selector}>
                  <Text
                    style={
                      activeSections.includes(selector.value) &&
                      styles.activeSelector
                    }
                  >
                    {selector.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}

          </View>
          <Accordion
            activeSections={activeSections}
            //liste des horaires des séances par jour
            sections={horaires}
            //touchableComponent={CheckBox}
            //Permet d'avoir plusieurs sections activent
            expandMultiple={true}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={100}
            onChange={this.setSections}
          />
        </ScrollView>
        <TouchableOpacity style={styles.touchButton} onPress={() => {console.log(this.state.jours);}}>
          <Text style={styles.text_Button}>Envoyer mon vote</Text>
        </TouchableOpacity>
      </SleyBackground>
    );
  }
}

const styles = StyleSheet.create({

    touchButton:
  {
      justifyContent:"flex-end",
      borderColor:'#C0C0C0C0',
      backgroundColor:'rgba(255, 255, 0, 0.7)',
      borderWidth:3,
      borderRadius:35,
      padding:20,
      marginBottom:30

    },
    text_Button:{
      textAlign:'center',
      fontWeight: 'bold',
      fontSize: 30,

    },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
    color:'#C0C0C0C0'
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    alignItems:'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,0,0.6)',
  },
  inactive: {
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
