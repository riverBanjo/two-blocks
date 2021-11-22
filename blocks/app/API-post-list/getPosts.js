jQuery('#rcf-get-posts').on('click', () => {
    let postNum = jQuery('#rcf-get-posts').attr( 'post-number' );
    jQuery.ajax({
        url: "/wp-json/wp/v2/posts/?per_page=" + postNum
    })
    .done(function( post_data ) {
        post_data.forEach( post => {
            let title = addElement('h4', post.title.rendered);
            let excerpt = post.excerpt.rendered;
            let liElement = document.createElement('li');
            liElement.appendChild(title);
            jQuery(excerpt).appendTo( liElement );
            jQuery('#rcf-post-list').append(liElement);
        });
    });
})

function addElement (element, text) {
    // create a new div element
    const newElement = document.createElement(element);
  
    // and give it some content
    const newContent = document.createTextNode(text);
  
    // add the text node to the newly created div
    newElement.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    return newElement;
}