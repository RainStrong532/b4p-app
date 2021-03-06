import { DOMAIN } from '../../constants'

export default function resendMail(data) {

    return new Promise((resolve, reject) => {
        const url = DOMAIN + 'auth/resend';
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