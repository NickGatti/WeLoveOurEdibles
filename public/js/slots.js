// let 1 = document.querySelector('#1') img 1
// let 2 = document.querySelector('#2') img 2
// let 3 = document.querySelector('#3') img 3

xhr.open( 'GET', '/api' )
xhr.send()

xhr.addEventListener( 'load', APILoaded )

var xhr = new XMLHttpRequest()

function getRandomIntInclusive( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min; //The maximum is inclusive and the minimum is inclusive
}

function APILoaded() {
    if ( this.status < 200 && this.status >= 400 && this.readyState !== 1 ) return
    console.log( this.responseText )
    console.log( JSON.parse( this.responseText ) )
}