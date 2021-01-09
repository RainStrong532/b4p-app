import { Alert } from 'react-native';

const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validatePhoneNumber = (phoneNumber) => {
    var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(String(email).toLowerCase());
}

const validateUrl = (url) => {
    var re = /(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    return re.test(String(url).toLowerCase());
}

const validatePassword = (password) => {
    if (password.length < 8) return false;
    return true;
}

const showErrorAlert = (title, message, callBack) => {
    const buttons = [{
        text: 'Ok',
        onPress: () => {
            if (callBack) {
                callBack()
            }
        }
    }];
    return Alert.alert(title, message, buttons)
}

const showAlert = (title, message, buttons) => {
    return Alert.alert(title, message, buttons, { cancelable: false })
}

const formatNumberString = (number, prefix) => {
    prefix = prefix || '0'
    const numberString = number < 10 ? `${prefix}${number}` : number
    return numberString
}

export default {
    validateEmail,
    validateUrl,
    showErrorAlert,
    showAlert,
    formatNumberString,
    validatePhoneNumber,
    validatePassword
}