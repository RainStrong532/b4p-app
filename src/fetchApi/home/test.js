import { DOMAIN } from '../../constants'

export default function test(data) {

    return new Promise((resolve, reject) => {

        const url = DOMAIN + 'app/user';
        fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: data.header
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