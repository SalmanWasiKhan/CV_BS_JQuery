$(document).ready(function () {
  $('.popover-btn').on('click', function () {
    const popover = $(this).next();

    if (popover.hasClass('show')) {
      popover.removeClass('show');
      popover.addClass('hidden');
    } else {
      popover.removeClass('hidden');
      popover.addClass('show');
    }

    // hide popover on click outside
    $(document).on('click', (event) => {
      if (event.target !== $(this) && !$(this).has(event.target).length) {
        popover.removeClass('show');

        // wait for transition to finish before removing hidden class
        popover.on('transitionend', () => {
          popover.addClass('hidden');
        });
      }
    });
  });

  // for screen size less than 768px add top-left class to popover and remove top-right class and vice versa
  const profilePicPopoverPosition = () => {
    const profilePicPopover = $('#profile-pic-popover');

    if (window.innerWidth < 768) {
      profilePicPopover.addClass('top-left');
      profilePicPopover.removeClass('top-right');
    } else {
      profilePicPopover.removeClass('top-left');
      profilePicPopover.addClass('top-right');
    }
  };

  profilePicPopoverPosition();
  $(window).resize(profilePicPopoverPosition);
});
