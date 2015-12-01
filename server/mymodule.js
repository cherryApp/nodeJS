// Szükséges modulok.
var itfactory = require( "itfactory" );

// Termékek lekérése a fájl-rendszerből.
var products = itfactory.find(
    'json/products.json',
    'name',
    'otva'
);

itfactory.showConsolMessage( products );