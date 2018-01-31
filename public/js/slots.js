var xhr = new XMLHttpRequest()

xhr.open( 'GET', '/api' )
xhr.send()

xhr.addEventListener( 'load', APILoaded )

function getRandomIntInclusive( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min; //The maximum is inclusive and the minimum is inclusive
}

function APILoaded() {
    if ( this.status < 200 && this.status >= 400 && this.readyState !== 1 ) return
    slots( JSON.parse( this.responseText ).products )
}

function fillArray( res ) {
    let output = []
    output.push( getRandomIntInclusive( 0, res - 1 ) )
    let num = 0
    let push = true
    while ( output.length < 3 ) {
        push = true
        num = getRandomIntInclusive( 0, res - 1 )
        for ( let i = 0; i < output; i++ ) {
            if ( num === output[ i ] ) push = false
        }
        if ( push ) output.push( getRandomIntInclusive( 0, res - 1 ) )
    }
    return output
}

function slots( res ) {
    let sltImg1 = document.querySelector( '#sltImg1' )
    let sltImg2 = document.querySelector( '#sltImg2' )
    let sltImg3 = document.querySelector( '#sltImg3' )
    let slotsArray = fillArray( res.length )
    sltImg1.src = res[ slotsArray[ 0 ] ].img_url
    sltImg2.src = res[ slotsArray[ 1 ] ].img_url
    sltImg3.src = res[ slotsArray[ 2 ] ].img_url

    sltImg1.title = res[ slotsArray[ 0 ] ].description
    sltImg2.title = res[ slotsArray[ 1 ] ].description
    sltImg3.title = res[ slotsArray[ 2 ] ].description

    sltImg1.alt = res[ slotsArray[ 0 ] ].name
    sltImg2.alt = res[ slotsArray[ 1 ] ].name
    sltImg3.alt = res[ slotsArray[ 2 ] ].name
}