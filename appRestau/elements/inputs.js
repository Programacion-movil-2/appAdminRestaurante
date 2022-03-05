import React, {Component} from "react";
import {View, StyleSheet, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

class Inputs extends Component {
    state = {isFocused: false};

    onFocusChange = () => {
        this.setState({isFocused: true})
    }

    render(){
        return(
            <View 
            style={[styles.InputContainer, {borderColor: this.state.isFocused 
            ? '#0779ef':'#eee'}]}>
                <Input 
                placeholder={this.props.name}
                onFocus={this.onFocusChange}
                inputContainerStyle={styles.InputContainer}
                inputStyle={style.InputText}
                secureTextEntry={this.props.pass}
                leftIcon={
                    <Icon
                    name={this.props.Icon}
                    size={22}
                    color={this.state.isFocused 
                        ? '#0779e4':'gray'}
                    >

                    </Icon>
                }
                >

                </Input>
            </View>
        );
    };
};

const styles = StyleSheet.create({

    styleInput:{
        borderColor: this.state.isFocused ?
    },
});

export default Inputs;
