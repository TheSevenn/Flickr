
export function debouncer( callback, timeout = 500 ) {
    let timer;
    return ( ...args ) => {
        clearTimeout( timer );
        timer = setTimeout( () => {
            callback( ...args );
            console.log( "test" );
        }, timeout )
    }
}
