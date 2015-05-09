$(document).ready ->
  $(".accordion-header > div").hide()
  $(".accordion-header > a").click ->
    $(this).next().slideToggle "fast"
