(function() {
  Number.prototype.px = function() {
    return Math.round(this).toString() + "px";
  };
  window.onload = function() {
    var hat, paper, scroll;
    hat = $('.hat');
    paper = $('.paper');
    scroll = function() {
      var hatOffset, scrollPos;
      scrollPos = $(window).scrollTop();
      hatOffset = -scrollPos / 20;
      hat.css('top', hatOffset.px());
      return paper.each(function() {
        var newOffset, p, zIndex;
        p = $(this);
        zIndex = parseInt(p.css('z-index'));
        newOffset = hatOffset + scrollPos / (40 - zIndex);
        p.css('margin-top', newOffset.px());
        return true;
      });
    };
    scroll();
    return document.onscroll = scroll;
  };
}).call(this);
