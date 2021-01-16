import React, { useState }  from 'react';
import { TouchableHighlight, Platform, Text,Modal, View  } from 'react-native';
//import styled from 'styled-components';
import DateTimePicker from '@react-native-community/datetimepicker';

import moment from "moment/min/moment-with-locales";

const CustomDatePicker = (props) => {

  moment.locale('fr')

  const [date, setDateP] = useState(moment().subtract(18,'years'));

  const [showDateP, setShowDateP] = useState(false);

  /* const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDatePicked(date)
    //console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
 */
const onchange = (e, selectedDate) =>{
  setDateP(moment(selectedDate))
  props.setDate(selectedDate)
  console.log("Selected Date:", selectedDate)
}


  return (
    <View>
        <View style={{width:"80%",borderRadius:45,alignSelf:"center"}}>
          
        <DateTimePicker
          locale='fr'
            timeZoneOffsetInMinutes={0}
            value={new Date(date)}
            mode="date"
            minimumDate={new Date(moment().subtract(90,'years'))}
            maximumDate={new Date(moment().subtract(18,'years'))} 
            onChange={onchange}
                          /> 
        </View>
      <Modal
        transparent={true}
        animationType='slide'
        visible={showDateP}
        supportedOrientations ={['portrait']} 
        onRequestClose= {() => setShowDateP(false)}>

          <View style={{flex: 1}}>
            <TouchableHighlight
              style={{
                flex:1,
                alignItems: 'flex-end',
                flexDirection:'row'
                }}
                activeOpacity={1}
                visible={showDateP}
                onPress={()=> setShowDateP(false)}
              >
                <View
                  style={{
                    backgroundColor:"#FFFFFF",
                    height: 256,
                    overflow:'hidden'}}>
                      
                      <View style={{marginTop:20}}>
                        <Text style={{color:"blue", fontSize:25, fontWeight:'bold', textAlign:'center'}}> mon date picker est là  !!!!</Text>
                        <DateTimePicker
                          timeZoneOffsetInMinutes={0}
                          value={new Date(date)}
                          mode="date"
                          minimumDate={new Date(moment().subtract(90,'years'))}
                          maximumDate={new Date(moment().subtract(18,'years'))} 
                          onChange={onchange}
                          /> 
                      </View>

                </View>

            </TouchableHighlight>

          </View>

      </Modal>
    </View>
  );
};

export default CustomDatePicker;

const styles={
  touchButton:{
    justifyContent:"flex-end",
    borderColor:'#C0C0C0C0',
    backgroundColor:'rgba(255, 255, 0, 0.7)',
    borderWidth:3,
    borderRadius:35,
    padding:20,
    marginBottom:30

  },
}
/*const Container = styled.TouchableOpacity`
  background-color: ${Platform.OS === 'ios' ? '#00000066' : 'transparent'};
  position: absolute;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;
const Header = styled.View`
  width: 100%;
  padding: 16px;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: white;
  border-color: grey;
`;
export default class CustomDatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(this.props.date),
    };
  }

  render() {
    const {  onClose, onChange, maximumDate, minimumDate,style } = this.props;
    const { date } = this.state;
    return (
      <Container onPress={onClose}>
        {Platform.OS === 'ios' && (
          <Header>
            <TouchableOpacity onPress={onClose}>
              <Text>Done</Text>
            </TouchableOpacity>
          </Header>
        )}
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          maximumDate= {maximumDate}
          minimumDate= {minimumDate}
          style={style}
          onChange={(e, d) => {
            if (Platform.OS === 'ios') {
              this.setState({ date: d });
              onChange(d);
            } else {
              onClose(d);
            }
         }}
         style={{ backgroundColor: 'white' }}
       />
     </Container>
   );
  }
}*/
