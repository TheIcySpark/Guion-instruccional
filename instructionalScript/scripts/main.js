$(function () {
    $("#header-placeholder").load("../header.html", function () {
        headerLoaded();
    });
    $("#footer-placeholder").load("../footer.html");
});

function headerLoaded(){
    var currentPage = window.location.pathname.split('/').pop();

    // Determine and set active button based on current page
    switch(currentPage) {
        case 'index.html':
            $('#index-btn').removeClass('btn-light').addClass('btn-primary');
            break;
        case 'unit1.html':
            $('#unit1-btn').removeClass('btn-light').addClass('btn-primary');
            break;
        // Add cases for other pages
        case 'unidad2.html':
            $('#unidad2-btn').removeClass('btn-light').addClass('btn-primary');
            break;
        case 'unidad3.html':
            $('#unidad3-btn').removeClass('btn-light').addClass('btn-primary');
            break;
        case 'unidad4.html':
            $('#unidad4-btn').removeClass('btn-light').addClass('btn-primary');
            break;
        case 'unidad5.html':
            $('#unidad5-btn').removeClass('btn-light').addClass('btn-primary');
            break;
        default:
            // If no page matches, you can set a default behavior
            break;
    }
}