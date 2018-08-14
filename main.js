
function loadRecipe(caller) {
    var text = $('#recipe-text');
    var title = $('#recipe-name');
    //var recipe_name = "cake_biscuit.html"; // cant be hebrew cos jquery racist
    // Getting elements from server and saving the in the variable data    
    text.load(caller.id+".html");

    // update title
    title.text(caller.text);
}

/**************************** main ****************************/

// once document loaded completely 
jQuery(document).ready(function () {
})