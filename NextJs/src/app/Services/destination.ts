import axios from 'axios'

export async function getAllDestinations() {
    let axiosConfig = {
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
    }
    let url = `NEXT_PUBLIC_API_URL/api/voyages`

    return axios.get(url, axiosConfig).then((res) => {
        return res.data
    })
}


export async function getDestinationById(id: string) {
    let axiosConfig = {
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
    }
    let url = `NEXT_PUBLIC_API_URL/api/voyages/single/${id}`

    return axios.get(url, axiosConfig).then((res) => {
        return res.data
    })
}
