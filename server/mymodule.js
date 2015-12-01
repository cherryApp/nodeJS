// Szükséges modulok.
var fs = require( "fs" ),
    itfactory = require( "itfactory" ),
    http = require( "http" ),
    port = 3333;

// Termékek lekérése a fájl-rendszerből.
var products = itfactory.find(
    'json/products.json',
    'name',
    'otva'
);

// Get kérések kiszolgálása.
function handleGetRequest( request, response ) {
    
    var url = "."+request.url;
    
    // Hibatűrő fájlkeresés.
    try {
        var file = fs.readFileSync( url, "utf8" );
        response.end( file );        
    } catch ( e ) {
        // 
    }
    
    
}

// Szerver indítása.
var app = http.createServer( function( request, response ) {
    
    response.setHeader( 'Access-Control-Allow-Origin', '*' );
    
    // Kérések kezelése.
    switch( request.method.toLowerCase() ) {
        case "get": 
            handleGetRequest( request, response );
            break;
    }
    
    console.log( "Kérés: ", request.method );
    console.log( request.url );
    
    response.end( "Hello..." );
    
} ).listen( port );