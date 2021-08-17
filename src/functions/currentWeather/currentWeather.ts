import axios from 'axios';
import { ICurrentProps } from '../../types/current'

export async function getCurrentWeather(query: string): Promise<ICurrentProps>{
    const params = {
        access_key: process.env.WEATHERSTACK_API_KEY,
        query: query
    }
    
     const currentWeather: ICurrentProps = await axios.get('http://api.weatherstack.com/current', {
            params
        })
        .then(response => {
            const apiResponse: ICurrentProps = {
                location: {
                    name: response.data.location.name,
                    country: response.data.location.country,
                    region: response.data.location.region,
                },
                current: {
                    temperature: response.data.current.temperature
                }
            }
            return apiResponse
            
        }).catch(error => {
            console.log(error);
            return error
        });
    
    return currentWeather;
}