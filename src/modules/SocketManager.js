import io from 'socket.io-client';
import Config from 'react-native-config'
import AsyncStorage from '@react-native-async-storage/async-storage';


const CHANNEL_CREATED_MESSAGE = 'created_message'
const CHANNEL_CONNECT = 'connect'
const CHANNEL_DISCONNECT = 'disconnect'
const MAX_RECONNECT_COUNT = 5
let number_reconnect_attempt = 0

const connect = async () => {
    initSocket()
    listen()
}
const initSocket = () => {
    this.socket = io(Config.SOCKET_SERVER, { transports: ['websocket'] });
}

const sendMessage = (data) => {

    // get access token
    AsyncStorage.getItem('userToken').then(token => {
        const dataBody = { ...data, token }
        // console.log("send message", token, data);
        this.socket.emit(CHANNEL_CREATED_MESSAGE, dataBody);
    })
}
const listen = () => {

    this.socket.on(CHANNEL_CONNECT, () => {
        // console.log('Socket CHANNEL_CONNECT')
        number_reconnect_attempt = 0
    });

    this.socket.on(CHANNEL_DISCONNECT, () => {
        // console.log('Socket CHANNEL_DISCONNECT')
        if (number_reconnect_attempt <= MAX_RECONNECT_COUNT) {
            number_reconnect_attempt += 1
            initSocket()
        }
    });
    this.socket.on(CHANNEL_CREATED_MESSAGE, (data) => {
        
    })
}