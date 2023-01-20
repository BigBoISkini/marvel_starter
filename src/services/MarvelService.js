 

class MarvelService {

    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=013546caa090476bc819162235354818';



    getResource = async (url) => {
        let res = await fetch(url);
        
            if (!res.ok) {
                throw new Error(`Что-то пошло не так ${url} , ${res.status}`)
            }


            return await res.json();

    }

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
            if (char.description.length == 0 ) {
                char.description = 'Данные персонажа отсутствуют...'
            }

            if (char.description.length > 203) {
                char.description = char.description.substr(1 , 203) + '...';
            }

        return {
                name: char.name,
                description: char.description,
                thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
                homepage: char.urls[0].url,
                wiki: char.urls[1].url,
                id: char.id,
                comics: char.comics.items,
                available: char.comics.available,
        }
    }

}


export default MarvelService;