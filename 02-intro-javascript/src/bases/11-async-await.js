console.log("Hola mundo!!");

const getImage = async() => {

    const apiKey = 'XhPw87X4Tn8cCHPx6WKpVhiQAOhDxg08';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);

}

getImage();
