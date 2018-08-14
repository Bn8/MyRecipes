
function loadRecipe(caller) {
    var text = $('#recipe-text');
    var title = $('#recipe-name');
    // Getting elements from server and saving the in the variable data    
    text.load(caller.id+".html");

    // update title
    title.text(caller.text);
}

/**************************** main ****************************/

// once document loaded completely 
jQuery(document).ready(function () {
})