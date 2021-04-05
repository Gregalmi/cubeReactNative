import axios from "axios";

export function findRessources(credentials) {
    return axios
        .get("http://192.168.107.128:8002/api/resources", credentials)
        .then(response => response.data)
        ;
}
