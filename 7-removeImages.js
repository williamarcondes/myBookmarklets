javascript:(
() => {

    function toArray(collection) {
        var array = new Array;
        for (var k = 0; k < collection.length; ++k)
            array[k] = collection[k];
        return array;
    }

    var images, img, altText;
    images = toArray(document.images);

    for (var i = 0; i < images.length; ++i) {
        img = images[i];
        altText = document.createTextNode(img.alt);
        img.parentNode.replaceChild(altText, img);
    }
}
)();
