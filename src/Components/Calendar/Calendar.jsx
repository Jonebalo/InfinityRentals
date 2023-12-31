import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://airbnb13.p.rapidapi.com/calendar',
  params: {
    room_id: '18951965',
    currency: 'USD',
    year: '2023',
    month: '12',
    count: '12'
  },
  headers: {
    'X-RapidAPI-Key': 'c781c8d073msh6327dedf9dd651ap1b0c3fjsn0bfe28c0019a',
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}