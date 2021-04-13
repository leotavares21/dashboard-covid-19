import axios from 'axios'

export const api1 = axios.create({
  baseURL: 'https://covid-193.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': process.env.RAPIDAPI_KEY,
    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
  },
})

export const api2 = axios.create({
  baseURL:
    'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': process.env.RAPIDAPI_KEY,
    'x-rapidapi-host':
      'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
  },
})

