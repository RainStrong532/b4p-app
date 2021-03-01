import { DOMAIN } from '../../constants'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function logout(token) {
    token = "Bearer " + token;
    return new Promise((resolve, reject) => {

        const url = DOMAIN + 'auth/logout';
        fetch(url, {
                method: "GET",
                headers: { "Content-type": "application/json",
                    Authorization: token
                }
            })
            .then((response) => response.json())
            .then((res) => {
                console.log('res', res)
                resolve(res);
            })
            .catch((error) => {
                console.log('error', error)
                reject(error);
            });
    });
}