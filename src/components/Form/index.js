import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native"
import ResultImc from './ResultImc';
import styles from './style';


export default function Form() {

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("preencha o peso e altura")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")

function imcCalculator(){
     return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é igual: ")
        setTextButton("Calcular Novamente.")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencha o peso e altura")
}

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setHeight}
                value={height}
                placeholder='Ex. 1.75'
                keyboardType='decimal-pad'
                />

                <Text styles={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex. 75.365'
                keyboardType='decimal-pad'
                />
               <TouchableOpacity
               style={styles.formButton}
               onPress={() => {
                validationImc()
               }}
               >
                <Text style={styles.textFormButton}>{textButton}</Text>
               </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}

