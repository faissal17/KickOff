import axios from 'axios';

const MatchesApi = axios.create({
  baseURL:
    'https://api.sportmonks.com/v3/football/fixtures?include=sport;participants;league',
  timeout: 5000,
});

const leugueApi = axios.create({
  baseURL: 'https://api.sportmonks.com/v1/football/leagues',
  timeout: 5000,
});

export const getAllMatches = async () => {
  try {
    const response = await MatchesApi.get('', {
      headers: {
        Authorization:
          'frtJUPf2izyAtnYdPZTzn0K6pK5oR1J6jv2YdLNoouyhkS4tEuCDI26ocmRs',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllLeagues = async () => {
  try {
    const response = await MatchesApi.get('', {
      headers: {
        Authorization:
          'frtJUPf2izyAtnYdPZTzn0K6pK5oR1J6jv2YdLNoouyhkS4tEuCDI26ocmRs',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
