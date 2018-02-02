exports.seed = function ( knex, Promise ) {
    // Deletes ALL existing entries
    return knex( 'product' ).del()
        .then( function () {
            // Inserts seed entries
            return knex( 'product' ).insert( [ {
                    name: 'Chocolate Fudge Brownie',
                    brand: 'Super Haaa',
                    MMJ: true,
                    category: 'Baked',
                    description: 'Super Haaa Super Baked Chocolate Fudge Brownie. Flaky and chewy come get super haaa with us!',
                    img_url: '/images/baked1.jpg',
                }, {
                    name: 'Double Chocolate Chip Cookie',
                    brand: 'Half Caked',
                    MMJ: true,
                    category: 'Baked',
                    description: 'Half Caked Double Chocolate Chip Cookie. Chewy and delecious, this one sets in after you forgot it was even MMJ and youve had 5.',
                    img_url: '/images/baked2.jpg'
                }, {
                    name: 'JK Bears',
                    brand: 'Slipz',
                    MMJ: true,
                    category: 'Candy',
                    description: 'Slipz JK Bears. JK because these are the ones with 150mg you forgot you had in in your car last week and you just ate the entire bag!',
                    img_url: '/images/candy1.jpg'
                }, {
                    name: 'Pecan Crunch',
                    brand: 'NatraMMJ',
                    MMJ: true,
                    category: 'Candy',
                    description: 'NartaMMJ Organic Pecan Cruch. These are so good it\'s really easy to eat too many.',
                    img_url: '/images/candy2.jpg'
                }, {
                    name: 'Lux 90% Infusion',
                    brand: 'True Chef',
                    MMJ: true,
                    category: 'Candy',
                    description: 'True Chef 90% dark chocolate cacao infused with almond. Savory and sweet.',
                    img_url: '/images/candy3.jpg'
                }, {
                    name: 'Via Tea Afterhours',
                    brand: 'Via',
                    MMJ: true,
                    category: 'Drinks',
                    description: 'Via\'s Via Tea Afterhours, a sparkling blend of honey, chammomile mixed with our brew of MMJ tea.',
                    img_url: '/images/drinks1.jpg'
                }, {
                    name: 'Puff Pops',
                    brand: 'Puffys',
                    MMJ: true,
                    category: 'Salty Snacks',
                    description: 'Puffys Puff Pops, lemon and garlic infused toasted corn. Great for a little bite.',
                    img_url: '/images/salted1.jpg'
                }, {
                    name: 'Preztzel Zinng',
                    brand: 'Puffys',
                    MMJ: true,
                    category: 'Salty Snacks',
                    description: 'Puffys take on traditional Japanese salted snacks, MMJ infused style.',
                    img_url: '/images/salted2.jpg'
                }, {
                    name: 'W.T. Puffycock',
                    brand: 'Puffys',
                    MMJ: true,
                    category: 'Candy',
                    description: 'Puffys W.T. Puffycock, a MMJ infused style of carmel corn.',
                    img_url: '/images/sweets1.jpg'
                }, {
                    name: 'Pop bites',
                    brand: 'Puffys',
                    MMJ: true,
                    category: 'Candy',
                    description: 'Puffys Pop Bites, the perfect switch from some Puff Pops, this guarantees full satisfaction.',
                    img_url: '/images/sweets2.jpg'
                },
          ] );
        } );
};