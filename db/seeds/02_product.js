exports.seed = function ( knex, Promise ) {
    // Deletes ALL existing entries
    return knex( 'product' ).del()
        .then( function () {
            // Inserts seed entries
            return knex( 'product' ).insert( [ {
                name: 'Cookie N Cream Brownie',
                brand: 'Infusion Edibles',
                MMJ: true,
                category: 'baked',
                description: 'Fudge Brownie',
                img_url: 'https://ddd33q3967xhi.cloudfront.net/AtNnBpJ540powHsnrD0DQ7-raqE=/fit-in/1400x1400/https%3a%2f%2fs3.amazonaws.com%2fleafly-s3%2fproducts%2fphotos%2fCWGeQoiQtW9aNtAOffzw_Cookies-N-Cream-brownie-square.jpg',
                    } ] );
        } );
};