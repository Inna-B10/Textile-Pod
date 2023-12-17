jQuery(document).ready(function () {
  jQuery(".tabs-section .tab-links a").on("click", function (e) {
    var currentAttrValue = jQuery(this).attr("href");

    // Show/Hide Tabs
    jQuery(".tabs-section " + currentAttrValue)
      .show()
      .siblings()
      .hide();

    // Change/remove current tab to active
    jQuery(this)
      .parent("li")
      .addClass("active")
      .siblings()
      .removeClass("active");

    e.preventDefault();
  });
});
