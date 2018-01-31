exports.seed = function ( knex, Promise ) {
    // Deletes ALL existing entries
    return knex( 'product' ).del()
        .then( function () {
            // Inserts seed entries
            return knex( 'product' ).insert( [ {
                    name: 'Baked 1',
                    brand: 'Baked 1 Brand',
                    MMJ: true,
                    category: 'Baked',
                    description: 'Baked One',
                    img_url: '/public/images/baked1.jpg',
                }, {
                    name: 'Baked 2',
                    brand: 'Baked 2 Brand',
                    MMJ: true,
                    category: 'Baked',
                    description: 'Baked One',
                    img_url: '/public/images/baked2.jpg'
                }, {
                    name: 'Candy 1',
                    brand: 'Candy 1 Brand',
                    MMJ: true,
                    category: 'Candy',
                    description: 'Candy One',
                    img_url: '/public/images/candy1.jpg'
                }, {
                    name: 'Candy 2',
                    brand: 'Candy 2 Brand',
                    MMJ: true,
                    category: 'Candy',
                    description: 'Candy Two',
                    img_url: '/public/images/candy2.jpg'
                }, {
                    name: 'Candy 3',
                    brand: 'Candy 3 Brand',
                    MMJ: true,
                    category: 'Candy',
                    description: 'Candy Three',
                    img_url: '/public/images/candy3.jpg'
                }, {
                    name: 'Drink 1',
                    brand: 'Drink 1 Brand',
                    MMJ: true,
                    category: 'Drinks',
                    description: 'Drink One',
                    img_url: '/public/images/drinks1.jpg'
                }, {
                    name: 'Salted 1',
                    brand: 'Salted 1 Brand',
                    MMJ: true,
                    category: 'Salty Snacks',
                    description: 'Salty Snack One',
                    img_url: '/public/images/salted1.jpg'
                }, {
                    name: 'Salted 2',
                    brand: 'Salted 2 Brand',
                    MMJ: true,
                    category: 'Salty Snacks',
                    description: 'Salty Snack Two',
                    img_url: '/public/images/salted2.jpg'
                }, {
                    name: 'Sweets 1',
                    brand: 'Sweets 1 Brand',
                    MMJ: true,
                    category: 'Candy',
                    description: 'Sweet Things',
                    img_url: '/public/images/sweets1.jpg'
                }, {
                    name: 'Sweets 2',
                    brand: 'Sweets 2 Brand',
                    MMJ: true,
                    category: 'Candy',
                    description: 'Sweet Things',
                    img_url: '/public/images/sweets2.jpg'
                },
          ] );
        } );
};