import { DOMAIN } from '../../constants'

export default function getMyInfo(token) {
    return new Promise((resolve, reject) => {

        const url = DOMAIN + `auth/users/myInfo`;
        fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    Authorization: token
                }
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