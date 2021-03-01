import { DOMAIN } from '../../constants'

export default function checkContact(data) {

    return new Promise((resolve, reject) => {
        const url = DOMAIN + 'auth/users/contact/' + data;
        fetch(url, {
                method: "GET",
                headers: { "Content-type": "application/json" },
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