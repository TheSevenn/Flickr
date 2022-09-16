import { SearchBar, SearchIcon } from "./Search.styled";

export default function Search() {
    return (
        <SearchBar>
            <label htmlFor="search"><SearchIcon /></label>
            <input type="search" placeholder="search movies, shows" id="search" />
        </SearchBar>
    )
}