
export interface VoyageProps {
    name: string
    arrival: string
    departure: string
    box: string
    category: string
    image: string
}

export type SingleVoyageProps = {
    id: string
    name: string
    arrival: string
    departure: string
    image: string
    category: {
        id: string
        name: string
    }
    box: {
        id: string
        name: string
    }
    user: {
        id: string
        name: string
        email: string
    }
}
