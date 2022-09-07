 var progressPath = document.querySelector('.progress path');
 var pathLength = progressPath.getTotalLength();
 progressPath.style.transition = progressPath.style.WebkitTransition =
     'none';
 progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
 progressPath.style.strokeDashoffset = pathLength;
 progressPath.getBoundingClientRect();
 progressPath.style.transition = progressPath.style.WebkitTransition =
    'stroke-dashoffset 100ms linear';

 var updateProgress = function () {
     // calculate values
   var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
     var percent = Math.round(scroll * 100 / height);
    //  if (percent == 99) {
    //     console.log("basarılı");
    //     percent = 305;
    //  }
    let progress = pathLength - (scroll * pathLength / height);
    
    // update dashOffset
    progressPath.style.strokeDashoffset = progress;
     // update progress count
     
    }
    
    $(window).scroll(updateProgress); 
    updateProgress();



$("#hamburger-opener").click(function () {
    if ($("#menu").hasClass("active")) {
        $("#menu").removeClass("active")
        $("body").removeClass("no-scroll")
    } else {
        $("#menu").addClass("active")
        $("body").addClass("no-scroll")
    }
})

$.fn.swap = function (elem) {
    elem = elem.jquery ? elem : $(elem);
    return this.each(function () {
        $(document.createTextNode('')).insertBefore(this).before(elem.before(this)).remove();
    });
};




