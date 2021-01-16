import { DOMAIN } from '../../constants'

export default function getPost(data, token) {
    return new Promise((resolve, reject) => {

        const url = DOMAIN + `app/posts/${data.pageNo}/20`;
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