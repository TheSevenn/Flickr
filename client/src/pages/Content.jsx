import React from "react";

import Overview from "../components/Overview/Overview";
import CardAlt from "../components/Card/CardAlt/CardAlt";
import CardLarge from "../components/Card/CardLarge/CardLarge";

export default function Content() {
    return (

        <React.Fragment>
            <Overview />
            <div>
                <h2>Casts:</h2>
                <CardAlt />
                <CardLarge />
            </div>
        </React.Fragment>

    )
}