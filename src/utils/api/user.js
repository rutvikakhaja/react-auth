import api from "../axios"
import { ServerConfig } from "../constants"

const getAllUsers = async()=>{
    const response = await api.get(`${ServerConfig.url}/users/getAll`)
    return response.data;
}

export default {
    getAllUsers,
}