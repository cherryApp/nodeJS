// Http modul beolvasása.
var http = require( "http" ),
    fs = require( "fs" ),
    port = 3333;

// Szerver indítása.
http.createServer( function( request, response ) {
    
    response.setHeader( 'Access-Control-Allow-Origin', '*' );
    
    // Termékek lekérése a fájl-rendszerből.
    var products = fs.readFileSync( 'json/products.json', 'utf8' );
    
    response.end( products );
    
} ).listen( port );

console.log( "Server listen in "+port+" port." );