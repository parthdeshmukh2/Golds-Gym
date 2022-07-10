
export const excerciseOptions  = {
    method: 'GET',
    headers: {
    //   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Key':"9ab2dfaf82msh2e03c0ea0779b6ep12d92djsn0db103bee968",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method:'GET',
    headers: {
      'X-RapidAPI-Key': '9ab2dfaf82msh2e03c0ea0779b6ep12d92djsn0db103bee968',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  }


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data; 
}