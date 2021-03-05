export const getGifs = async(category) => {

    // try {
        const limit= 10;
        const apiKey = 'OaEa0ne6VcgJ8mOtnOSd71XJRSQrFy76';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`);
        const {data}  = await resp.json()

        const gifs = data.map(img => {

            return {
                id: img.id,
                title : img.title,
                url: img.images.downsized_medium.url
            }

        });

        return gifs;
}