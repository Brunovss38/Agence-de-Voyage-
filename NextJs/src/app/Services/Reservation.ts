import axios from 'axios'

export async function getAllReservations() {
    let axiosConfig = {
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
    }
    let url = `NEXT_PUBLIC_API_URL/api/reservations`

    return axios.get(url, axiosConfig).then((res) => {
        return res.data
    })
}
