Number.prototype.px = ->
  Math.round(this).toString() + "px"

window.onload = ->
  hat = $('.hat')
  paper = $('.paper')

  scroll = ->
    scrollPos = $(window).scrollTop();
    hatOffset = (-scrollPos / 20)
    hat.css('top',hatOffset.px())
    paper.each ->
      p = $(this)
      zIndex = parseInt(p.css('z-index'))
      newOffset = hatOffset+scrollPos / (40 - zIndex)
      p.css('margin-top',newOffset.px())
      true


  scroll()
    
  document.onscroll = scroll
