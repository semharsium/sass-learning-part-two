

$(document).ready(function() {

    // Please check this: https://davidwalsh.name/query-string-javascript
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        let results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    function jumpToPanel(panelId) {
        // deactivating panel
        $(".panel--active").removeClass("panel--active");

        // activating panel
        $(".panel[data-panel='" + panelId +  "']").addClass("panel--active");
    };
    
    var searchString = window.location.search;

    if(searchString !== '') {
        var panelId = getUrlParameter("panel");
        jumpToPanel(panelId);
    }

    $(".js-button").click(function(event) {
        //var panel= $(event.currentTarget).data('panel-connector');
        var panel = this.dataset.panelConnector;
        jumpToPanel(panel);
        $('.panel__slider-image').slick('refresh');
    });

    $('.panel__slider-image').slick({
        slidesToshow:1,
        slidesToScroll:1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplayspeed: 2000,
    });

    $(".js-about-me").click(function(){
        var panel = this.dataset.panelConnector;
        jumpToPanel(panel);
        $('.panel__slider-image').slick('refresh');
    });
});
