import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MovieCard from "../Card/CardSmall/MovieCard";
import TvShowCard from "../Card/CardSmall/TvShow";
import { CategoryContainer } from "./Category.styled";
import { getOverviewById } from "../../redux/features/overview/overviewSlice";
import { colors } from "../_shared.styled";
import { getTrending } from "../../redux/features/content/contentSlice";

export default function Category( { category } ) {

    const dispatch = useDispatch();
    useEffect( () => {
        dispatch( getTrending() );
    }, [ dispatch ] );

    function goToOverview( meta ) {
        dispatch( getOverviewById( meta ) );
        console.log( meta.id );
    }

    const { movies, tvshows } = useSelector( store => store.content );

    return (

        <section>
            {
                movies.length > 0 && <CategoryContainer bgcolor={colors.mutedBrandColor} color={colors.brandColor}>
                    <h3>{category} Movies</h3>
                    <div>
                        {
                            movies.map( movie =>
                                <Link key={movie.id} to={"/movies/" + movie.id + Math.floor( Math.random() * 100 )} onClick={() => { goToOverview( { id: movie.id, type: "movie" } ) }}>
                                    <MovieCard {...movie} />
                                </Link>
                            )
                        }
                    </div>
                </CategoryContainer>
            }

            {
                tvshows.length > 0 && <CategoryContainer bgcolor={colors.mutedBrightColor} color={colors.brightColor}>
                    <h3>{category} TV Shows</h3>
                    <div>
                        {
                            tvshows.map( tvshow =>
                                <Link key={tvshow.id} to={"/tvshows/" + tvshow.id + Math.floor( Math.random() * 100 )} onClick={() => { goToOverview( { id: tvshow.id, type: "tv" } ) }}>
                                    <TvShowCard {...tvshow} />
                                </Link> )
                        }

                    </div>
                </CategoryContainer>
            }
        </section >
    )
}