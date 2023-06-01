// MADE BY chatGPT USING jquery

document.addEventListener('DOMContentLoaded', function() {
  // dragElements
  $(".title-bar").mousedown(function(e) {
    let $drag = $(this).closest('.window').addClass('active-handle').addClass('draggable');
    let z_idx = $drag.css('z-index'),
      drg_h = $drag.outerHeight(),
      drg_w = $drag.outerWidth(),
      pos_y = $drag.offset().top + drg_h - e.pageY,
      pos_x = $drag.offset().left + drg_w - e.pageX;
    $drag.css('z-index', 1000).parents().on('mousemove', function(e) {
      $('.draggable').offset({
        top: e.pageY + pos_y - drg_h,
        left: e.pageX + pos_x - drg_w
      }).on('mouseup', function() {
        $(this).removeClass('draggable').css('z-index', z_idx);
      });
    });
    e.preventDefault(); // disable selection
  }).on('mouseup', function() {
    $('.draggable').removeClass('draggable');
  });

  $('#closeWIN').click(function() {
    $(this).closest('.window').hide();
  });
  
  $('#submitWIN').click(function() {
    $(this).closest('.window').hide();
  });  

  $('.title-bar button[aria-label="Minimize"]').click(function() {
    let $window = $(this).closest('.window');
    let $windowBody = $window.find('.window-body');
    let $titleBar = $window.find('.title-bar');

    $windowBody.toggle();
    $titleBar.toggleClass('minimized');
    if ($titleBar.hasClass('minimized')) {
      $titleBar.addClass('inactive');
    } else {
      $titleBar.removeClass('inactive');
    }
  });

  const startButton = document.getElementById('openWIN');
  const startMenu = document.getElementById('startMENU');

  startButton.addEventListener('click', function() {
    if (startMenu.style.display === 'block') {
      startMenu.style.display = 'none';
    } else {
      startMenu.style.display = 'block';
    }
  });

  document.addEventListener('click', function(event) {
    if (!startMenu.contains(event.target) && event.target !== startButton) {
      startMenu.style.display = 'none';
    }
  });
});

// REOPEN WINDOW WINDOWBAKA

document.addEventListener('DOMContentLoaded', function() {
  // Check if the window is already open
  function isWindowOpen() {
    let windowElement = document.getElementById('window1');
    return windowElement && windowElement.style.display !== 'none';
  }

  // Open the window
  function openWindow() {
    let windowElement = document.getElementById('window1');
    if (windowElement) {
      windowElement.style.display = 'block';
    }
  }

  // Button click event handler
  let windowBAKAButton = document.getElementById('windowBAKA');
  if (windowBAKAButton) {
    windowBAKAButton.addEventListener('click', function() {
      if (!isWindowOpen()) {
        openWindow();
      }
    });
  }
});
