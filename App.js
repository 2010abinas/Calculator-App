/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class App extends React.Component {

  constructor(){
    super();
    this.state={
      resultText:"",
      calculationText:""
    }
  }

  calculateResult(){
    const text= this.state.resultText;
    this.setState({
      calculationText: eval(text)
    })
  }

  operations(operation){
    switch(operation){
      case 'AC':
        this.setState({
          resultText:"",
          calculationText: ""
        });
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        if(this.state.resultText.slice(-1) == '+'|| this.state.resultText.slice(-1) == '-' || this.state.resultText.slice(-1) == '*'|| this.state.resultText.slice(-1) == '/') {
          return;
        }
        if(this.state.resultText == ''){
          return;
        }
        this.setState({
          resultText: this.state.resultText + operation
        })
    }
  }

  check(){
    const text=this.state.resultText;
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '*':
      case '/':
        return false;
    }
    return true;
  }

  buttonClick(val){
    if(val == '='){
      return this.check() && this.calculateResult(this.state.resultText)
    }
    this.setState({
      resultText: this.state.resultText + val
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <TouchableOpacity onPress={()=>this.buttonClick(7)} style={styles.btn}>
                <Text style={styles.btnText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonClick(8)} style={styles.btn}>
                <Text style={styles.btnText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonClick(9)} style={styles.btn}>
                <Text style={styles.btnText}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={()=>this.buttonClick(4)} style={styles.btn}>
                <Text style={styles.btnText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonClick(5)} style={styles.btn}>
                <Text style={styles.btnText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonClick(6)} style={styles.btn}>
                <Text style={styles.btnText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={()=>this.buttonClick(1)} style={styles.btn}>
                <Text style={styles.btnText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonClick(2)} style={styles.btn}>
                <Text style={styles.btnText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonClick(3)} style={styles.btn}>
                <Text style={styles.btnText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={()=>this.buttonClick('.')} style={styles.btn}>
                <Text style={styles.btnText}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonClick(0)} style={styles.btn}>
                <Text style={styles.btnText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonClick('=')} style={styles.equalBtn}>
                <Text style={styles.btnText}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.operations}>
            <TouchableOpacity onPress={()=>this.operations('AC')} style={styles.btn}>
              <Text style={styles.btnColor}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.operations('+')} style={styles.btn}>
              <Text style={styles.btnColor}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.operations('-')} style={styles.btn}>
              <Text style={styles.btnColor}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.operations('*')} style={styles.btn}>
              <Text style={styles.btnColor}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.operations('/')} style={styles.btn}>
              <Text style={styles.btnColor}>/</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  resultText: {
    fontSize: 30,
    color: 'black',
    paddingRight: 10
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculationText: {
    fontSize: 38,
    color: 'black',
    paddingRight: 10
  },
  buttons: {
    flexGrow: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#636e72',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btn:{
    flex:1,
    alignItems:'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  equalBtn:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor:'teal'
  },
  btnText:{
    fontSize:32,
    color: 'black'
  },
  btnColor:{
    color: 'white',
    fontSize:32
  },
  operations: {
    flex: 1,
    backgroundColor: '#2d3436',
    justifyContent: 'space-around'
  }
});
