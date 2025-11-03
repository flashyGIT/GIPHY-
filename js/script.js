console.log("script.js loaded"); 
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=1mXoBCy9mPPtlp14xelUPJyunqxg1H0u&q=dogs&limit=25&offset=0&rating=r&lang=en&bundle=messaging_non_clips";
let images = []; 
async function getGifs() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    
    images = data.data.map(item => item.images.original.url);

    
    console.log(images);
  } catch (error) {
    console.error("Error fetching GIFs:", error);
  }
}


getGifs();
