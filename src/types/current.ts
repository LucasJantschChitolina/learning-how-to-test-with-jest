export interface ICurrentProps {
    location: {
        name: string;
        country: string;
        region: string;
    },
    current: {
        temperature: number;
    }
}