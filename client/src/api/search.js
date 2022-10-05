import axios from "axios";

import { base_url, api_key, language } from "../api/config";

export function searchQuery( query ) {
    return axios.get( `${base_url}/search/multi?api_key=${api_key}&language=${language.eng_us}&query=${query}&page=1&includes_adult=false` )
}
