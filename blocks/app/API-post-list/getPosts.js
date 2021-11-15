jQuery('#rcf-get-posts').on('click', () => {
    jQuery.ajax({
        url: "/wp-json/wp/v2/posts/"
    })
    .done(function( post_data ) {
        post_data.forEach( post => console.log(post.title.rendered));
        post_data.forEach( post => jQuery('#rcf-post-list').append(addElement('li', post.title.rendered)));
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