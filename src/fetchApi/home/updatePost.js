import AsyncStorage from '@react-native-async-storage/async-storage';
import { DOMAIN } from '../../constants'

export default function test(data, token) {
    return new Promise((resolve, reject) => {

        const url = DOMAIN + `app/posts/${data.id}`;
        fetch(url, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    Authorization: token
                },
                body: JSON.stringify(data)
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