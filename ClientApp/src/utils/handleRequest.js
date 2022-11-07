export default async function handleRequest(url, requestOptions) {
    await fetch(url, requestOptions)
    .then(() => {
        console.log('Success');
    })
    .catch((error) => {
        console.error(error);
    });
}