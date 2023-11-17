import axios from "axios";

export async function fetchStatuses() {
    const response = await axios.get('http://3.101.20.102:5000/api/statuses')
    return response
}
