import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Overview from "../../components/Overview/Overview";
import Casts from "../../components/Casts/Casts";
import { useAddress } from "../../customHooks/useAddress";
import { getOverviewById } from "../../redux/features/overview/overviewSlice";

export default function Content() {
    const dispatch = useDispatch();
    const { id, type } = useAddress();
    useEffect( () => {
        const meta = { id, type };
        dispatch( getOverviewById( meta ) );
    }, [ dispatch, id, type ] );


    console.log( "Run in Content" );
    const { seasons, credits } = useSelector( store => store.overview.overviewResponse );
    console.log( "seaasons are:", seasons, "and casts:", credits );
    return (
        <React.Fragment>
            <Overview />
            <Casts seasons={seasons} credits={credits} />
        </React.Fragment>
    )
}