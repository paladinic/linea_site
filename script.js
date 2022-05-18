// When the document is fully rendered...
$(document).ready(function() {
  // ...select all header elements...
  $('h1, h2, h3, h4, h5').each(function() {
    // ...and add an id to them corresponding to their 'titles'
    $(this).attr('id', $(this).html());
  });

});

window.onload=function(){

  const darkCheckbox = document.querySelector('input[value="dark_mode"]');

  const footer = document.querySelector('footer');

  const toc_item = document.querySelectorAll('li.list-group-item, .tocify');
  const code_style = document.querySelectorAll('.code_style');
  const code_string = document.querySelectorAll('.hljs-string');
  const code_keyword = document.querySelectorAll('.hljs-keyword');
  const code_literal = document.querySelectorAll('.hljs-literal');
  const dt = document.querySelectorAll('.dataTables_wrapper tr, .dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate');
  const plotly = document.querySelectorAll('.plotly g text');
  const plot_container = document.querySelectorAll('.plot-container');
  const output_style = document.querySelectorAll('.output_style');
  const body = document.body;

  function darkMode() {
    if (darkCheckbox.checked == true) {
      body.classList.add('dark_body');

      footer.classList.add('dark_footer');

      [].forEach.call(code_style, el => {
        el.classList.add('dark_code_style');
      });
      [].forEach.call(code_string, el => {
        el.classList.add('dark_code_string');
      });
      [].forEach.call(code_keyword, el => {
        el.classList.add('dark_code_keyword');
      });
      [].forEach.call(code_literal, el => {
        el.classList.add('dark_code_literal');
      });
      [].forEach.call(output_style, el => {
        el.classList.add('dark_output_style');
      });
      [].forEach.call(dt, el => {
        el.classList.add('dark_dt_style');
      });
      [].forEach.call(plotly, el => {
        el.classList.add('dark_plotly_style');
      });
      [].forEach.call(toc_item, el => {
        el.classList.add('dark_toc');
      });
      [].forEach.call(plot_container, el => {
        el.classList.add('dark_plot_container');
      });


    } else {
      body.classList.remove('dark_body');

      footer.classList.remove('dark_footer');

      [].forEach.call(code_style, el => {
        el.classList.remove('dark_code_style');
      });
      [].forEach.call(code_string, el => {
        el.classList.remove('dark_code_string');
      });
      [].forEach.call(code_keyword, el => {
        el.classList.remove('dark_code_keyword');
      });
      [].forEach.call(code_literal, el => {
        el.classList.remove('dark_code_literal');
      });
      [].forEach.call(output_style, el => {
        el.classList.remove('dark_output_style');
      });
      [].forEach.call(dt, el => {
        el.classList.remove('dark_dt_style');
      });
      [].forEach.call(plotly, el => {
        el.classList.remove('dark_plotly_style');
      });
      [].forEach.call(toc_item, el => {
        el.classList.remove('dark_toc');
      });
      [].forEach.call(plot_container, el => {
        el.classList.remove('dark_plot_container');
      });
    }
  }

  darkCheckbox.addEventListener('click', function() {
    darkMode();
  });

  var btn = $('#back_to_top');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  // document.querySelector('input[value="dark_mode"]').click()

}
