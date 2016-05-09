# bit-market
Bit-Market Buyer tools for a network based goods distribution network.  The following features have been implemented at the moment.

## Features
* Take the location of the buyer browsing
* Show a map of stockists located near the buyer
* Show detailed information of stockists when the buyer clicks on the specific stockist on the map
    * Name of stockist
    * Business Hours
    * Customer Satisfaction Rating
    * Store availability

## Back End Server
* We use json-server to simulate a back end server
* The data fed into the system at the moment is for Addis Ababa, Ethiopia.  Zoom to Addis if you don't see any markers based on your location.

## Configuration
Install dependencies:
   `$ npm install`
Install webpack and its dev server:
   `$ npm install -g webpack webpack-dev-server`
Install json-server:
   `$ npm install -g json-server`

## Running the JSON Server (Simulating the back end)
Open a terminal window:
   `$ cd back-end-server-mock`
Run the json server with `--watch` in case you want to add stockist data.
   `$ json-server db.json --watch`
The server is now accessible over at http://localhost:3000/.
List of stockists: http://localhost:3000/stockists
Individual Stockist: http://localhost:3000/stockists/1

The Server supports `PUT`, `POST`, `DELETE` as well as `GET`.  You can try it out with curl and add new data.

## Running bit-market
From inside the project root folder run:
   `$ webpack-dev-server`

Browse to http://localhost:8080/

## TO DO

* Browse products available near the buyer (Not Implemented)
* Vote for products to be stocked near the buyer's area (Not Implemented)
* Integrating with Google's *Get Directions* feature to the stockist
* There is no sophisticated view layer like react at the moment because googles map's canvas becomes a bit clunky with react.  However, react will be used when building the rest of these features.
* Add tests.
