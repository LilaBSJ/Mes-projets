var tooltipTriggerList =[].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
var toolTipList = tooltipTriggerList.map(function(tooltipTriggerEl){
    return new bootstrap.Tooltip(tooltipTriggerEl)
})