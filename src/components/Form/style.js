import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContext:{
        width: '100%',
        height:'100%',
        bottom:0,
        backgroundColor:'#fff',
        alignItems:'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30,
    },
    form:{
        width:'100%',
        height:"auto",
        marginTop:30,
        padding:10,
    },
    formLabel: {
        color:'#00000',
        fontSize:18,
        paddingLeft: 20,
    },
    formInput: {
        width:'90%',
        borderRadius:50,
        backgroundColor: '#DcDcDc',
        height: 40,
        margin:12,
        paddingLeft:10,
    },
    formButton:{
        borderRadius:50,
        alignItems: 'center',
        justifyContent:'center',
        width:'90%',
        backgroundColor:'#B22222',
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,
    },
    textFormButton: {
        fontSize: 20,
        color: '#DCDCDC'
    }
});

export default styles;