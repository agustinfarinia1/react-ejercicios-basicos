import React from "react";

export const Small = React.memo(({counter}) => {

    return (
        <h1>Counter : {counter}</h1>
    );
})