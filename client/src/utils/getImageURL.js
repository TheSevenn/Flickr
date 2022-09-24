import { image_base_url } from "../api/config";

export function getImageURL( image_path, size ) {
    return `${image_base_url}${size}/${image_path}`;
}