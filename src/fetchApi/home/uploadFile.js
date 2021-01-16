import AsyncStorage from '@react-native-async-storage/async-storage';
import { DOMAIN } from '../../constants'

export default function uploadFile(data, token) {
    return new Promise((resolve, reject) => {

        const url = DOMAIN + 'app/upload';
        fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "multipart/form-data",
                    Authorization: token
                },
                body: data,
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