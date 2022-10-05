import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { SearchBar, SearchIcon, SearchResults, SearchStyled, MovieIcon, TvIcon } from "./Search.styled";
import { debouncer } from "../../utils/debouncer";
import { getSearchResults } from "../../redux/features/search/searchSlice";
import { getImageURL } from "../../utils/getImageURL";
import { poster_size } from "../../api/config";

export default function Search() {
    const dispatch = useDispatch();


    function handleQuery( event ) {
        dispatch( getSearchResults( event.target.value ) );
    }

    const debounceSearch = debouncer( handleQuery );
    const search_result = useSelector( store => store.search.search_result );
    console.log( search_result );

    return (
        <React.Fragment>
            <SearchStyled>
                <SearchBar>
                    <input type="search" placeholder="search movies, shows"
                        onKeyUp={( event ) => debounceSearch( event )} />
                    <label htmlFor="search"><SearchIcon /></label>
                </SearchBar>
                <SearchResults>
                    {
                        search_result.results && search_result.results.map( result =>
                            result.media_type !== "person" &&
                            < Link to={"/" + result.media_type + "/" + result.id + "/" + Math.floor( Math.random() * 100 )} key={result.id + Math.random()}>
                                <section>
                                    <img alt="" src={getImageURL( result.poster_path, poster_size.w342 )} />
                                    <div>
                                        <h4>{result.title || result.name}</h4>
                                        <p>{( result.first_air_date || result.release_date )?.substr( 0, 4 ) || "unknown"}</p>
                                        {
                                            result && result.media_type === "tv" ? <TvIcon /> : <MovieIcon />
                                        }
                                    </div>
                                </section>
                            </Link>
                        )}
                </SearchResults>
            </SearchStyled>
        </React.Fragment >
    )
}

// search_result.results && search_result.results.map( result => <li key={result.id}>{result.title}</li> )