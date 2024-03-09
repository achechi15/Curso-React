console.log("Hola mundo!!");

const apiKey = 'XhPw87X4Tn8cCHPx6WKpVhiQAOhDxg08';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

peticion
    .then( response => response.json())
    .then( ({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch( err => console.warn);