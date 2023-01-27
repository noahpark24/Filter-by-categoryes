$(document).ready(function(){
    
    //ADDING ACTIVE CLASS TO THE FIRST HREF
    $('.category-list .category_item[category="all"]').addClass('ct_item-active');

    //FILTERING PRODUCTS
    $('.category_item').click(function(){
        let category_product = $(this).attr('category');
        console.log(category_product);
        //ADDING ACTIVE CLASS TO THE SELECTED ITEM
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        //HIDDING THE PRODUCTS
        $('.product-item').hide();

        //SHOWING THE PRODUCTS WHIT THE SELECTED CATEGORY
        $('.product-item[category="'+category_product+'"]').show();

    });
    //SHOWING ALL THE PRODUCTS
    $('.category_item[category="all"]').click(function(){
        $('.product-item').show();
    })

});