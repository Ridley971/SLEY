import React, { useState }  from 'react';
import { TouchableOpacity, Platform, Text,Button, View  } from 'react-native';
//import styled from 'styled-components';
import DateTimePicker from '@react-native-community/datetimepicker';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment/min/moment-with-locales";

const Example = () => {

  moment.locale('fr')

  const [datePicked, setDatePicked] = useState(new Date());

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
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

  return (
    <View>
    <View style={{width:"80%",borderRadius:45,alignSelf:"center"}}>
      <TouchableOpacity style={styles.touchButton}
        onPress={showDatePicker} >
        <Text style={{fontSize:20,textAlign:"center",fontWeight:"bold"}}>
          {moment(datePicked).format("L")}
        </Text>
      </TouchableOpacity>

    </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        isDarkModeEnabled={false}
        value={datePicked}
      />
    </View>
  );
};

export default Example;

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
