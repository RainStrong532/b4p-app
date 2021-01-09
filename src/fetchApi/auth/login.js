import { DOMAIN } from '../../constants'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function login(data) {

    return new Promise((resolve, reject) => {
            console.warn("api call");
        const url = DOMAIN + 'auth/signin';
        fetch(url, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                console.log('error', error)
                reject(error);
            });
    });
}