const axios = require('axios');
const fs = require('fs');

const LATEST_GAMES_URL = "https://internal-prod.apigee.fandom.net/v1/xapi/finder/metacritic/web?sortby=-metaScore&productType=games&page=1&releaseYearMin=1958&releaseYearMax=2024&offset=0&limit=24&apikey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u";

async function fetchLatestGames() {
    try {
        const response = await axios.get(LATEST_GAMES_URL);
        const { items } = response.data.data;

        const games = items.map((item) => {
            const { description, slug, releaseDate, image, criticScoreSummary, title } = item;
            const { score } = criticScoreSummary;

            // Crear la URL de la imagen
            const { bucketType, bucketPath } = image;
            const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

            return {
                description,
                releaseDate,
                score,
                slug,
                title,
                image: img,
            };
        });

        return games;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function saveGamesToJSON() {
    const games = await fetchLatestGames();
    const jsonContent = JSON.stringify(games, null, 2);

    fs.writeFile('./lib/games.json', jsonContent, 'utf8', (err) => {
        if (err) {
            console.error("An error occurred while writing JSON to file.", err);
        } else {
            console.log("JSON file has been saved.");
        }
    });
}

saveGamesToJSON();