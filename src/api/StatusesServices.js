import axios from "axios";

export async function fetchStatuses() {
    const response = await axios.get('https://kanban-server-qq74.onrender.com/statuses')
    return response
}
