import { useLocation, useParams } from "react-router-dom";

export function useAddress() {
    let id = useParams()._id;
    let type = useLocation().pathname.substring( 1, 3 );
    type = type === 'tv' ? 'tv' : 'movie';
    return { id, type }
}