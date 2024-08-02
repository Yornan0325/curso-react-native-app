// import axios from 'axios';

// const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
// const LATEST_GAMES ="https://internal-prod.apigee.fandom.net/v1/xapi/finder/metacritic/web?sortby=-metaScore&productType=games&page=1&releaseYearMin=1958&releaseYearMax=2024&offset=0&limit=24&apikey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u";


// export async function getLatestGames() {
//     try {
//         const response = await axios.get(PROXY_URL + LATEST_GAMES);
//         const { items } = response.data.data;

//         return items.map((item) => {
//             const { description, slug, releaseDate, image, criticScoreSummary, title } = item;
//             const { score } = criticScoreSummary;

//             // Crear la URL de la imagen
//             const { bucketType, bucketPath } = image;
//             const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

//             return {
//                 description,
//                 releaseDate,
//                 score,
//                 slug,
//                 title,
//                 image: img,
//             };
//         });
//     } catch (error) {
//         console.error(error);
//         return [];
//     }
// }
// export async function  getLatestGames(){
//     const LATEST_GAMES ="https://internal-prod.apigee.fandom.net/v1/xapi/finder/metacritic/web?sortby=-metaScore&productType=games&page=1&releaseYearMin=1958&releaseYearMax=2024&offset=0&limit=24&apikey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u";
// // const LATEST_GAMES ="https://internal-prod.apigee.fandom.net/v1/xapi/games/metacritic/mario-vs-donkey-kong-2024/web?apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u&componentName=product&componentDisplayName=Product&componentType=Product";

//     const rawData= await fetch(LATEST_GAMES,  { method: 'GET',
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//         },
//         mode: 'no-cors', // <---
//         cache: 'default'
//      });

//     const json= await rawData.json();
//     const {data:{items},}=json
//     return items.map((item)=>{
//         const {description, slug,releaseDate,image,criticScoreSummary,title}=item;
//         const {score}=criticScoreSummary;

//         //crea la imagen
//         const {bucketType}=image
//         const img=`https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

//         return{
//             description,
//             releaseDate,
//             score,
//             slug,
//             title,
//             image:img
//         }
//     })
// }

// export async function getGameDtails(){
//     const GAME_DETAILS=`https://internal-prod.apigee.fandom.net/v1/xapi/finder/metacritic/web?sortby=-metaScore&productType=games&page=1&releaseYearMin=1958&releaseYearMax=2024&offset=0&limit=24&apikey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`
// }

// export async function getGameDetails(slug) {
//     const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/finder/metacritic/web?slug=${slug}&apikey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;

//     const rawData = await fetch(GAME_DETAILS);
//     const json = await rawData.json();
//     const {
//         data: { item },
//     } = json;

//     const { description, slug, releaseDate, image, criticScoreSummary, title } = item;
//     const { score } = criticScoreSummary;

//     // Create the image URL
//     const { bucketType, bucketPath } = image;
//     const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

//     return {
//         description,
//         releaseDate,
//         score,
//         slug,
//         title,
//         image: img
//     };
// }