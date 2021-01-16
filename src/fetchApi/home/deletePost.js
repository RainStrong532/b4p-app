import { DOMAIN } from '../../constants'

export default function deletePost(data, token) {
    console.warn("id: ", data);
    return new Promise((resolve, reject) => {

        const url = DOMAIN + `app/posts/${data}`;
        fetch(url, {
                method: "DELETE",
                headers: {
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