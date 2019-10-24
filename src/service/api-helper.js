import axios from 'axios';

//endpoint = https://api.nasa.gov/planetary/apod?api_key=4rK3fduciaheLDga1gdCJwMdxz7hWweZqBSlLnoH&date=2019-09-19

let apiKey = "4rK3fduciaheLDga1gdCJwMdxz7hWweZqBSlLnoH"

// export const getImage = async () => {
//   const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2019-09-19`)
//   const image = response.data
//   // console.log(image)
//   return image;
// }

export const getImage1 = async () => {
  const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2019-09-19`)
  const image1 = response.data
  // console.log(image1)
  return image1;
}

export const getImage2 = async () => {
  const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2019-09-18`)
  const image2 = response.data
  // console.log(image2)
  return image2;
}

export const getImage3 = async () => {
  const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2019-09-17`)
  const image3 = response.data
  // console.log(image2)
  return image3;
}

export const getImage4 = async () => {
  const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2019-09-16`)
  const image4 = response.data
  // console.log(image2)
  return image4;
}

export const getImage5 = async () => {
  const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2019-09-10`)
  const image5 = response.data
  // console.log(image2)
  return image5;
}

export const getImage6 = async () => {
  const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2019-09-14`)
  const image6 = response.data
  // console.log(image2)
  return image6;
}

export const getImage7 = async () => {
  const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2019-09-13`)
  const image7 = response.data
  // console.log(image2)
  return image7;
}

export const getImage8 = async () => {
  const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2019-09-12`)
  const image8 = response.data
  // console.log(image2)
  return image8;
}

export const getImage9 = async () => {
  const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2019-09-11`)
  const image9 = response.data
  // console.log(image2)
  return image9;
}

/////////////////////// getGifs////////////////////////////////////////////
export const getGifs = async () => {
  const response = await axios.get("https://api.giphy.com/v1/gifs/search?api_key=ezwirWIo30cQoZtTWMbGlQ11CSbo7x5X&q=blackhole&limit=10&offset=0&rating=G&lang=en")
  const gifs = response.data.data
  return gifs;
}

////////////////getInput////////
export const generatePics = async (date) => {
  const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
  const pic = response.data
  // console.log(image2)
  return pic;
} 
