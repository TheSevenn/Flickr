import axios from "axios";

import { base_url, api_key, language } from "./config";

export function getOverview( id, type ) {
    return axios.get( `${base_url}/${type}/${id}?api_key=${api_key}&language=${language.eng_us}` );
}