$(document).ready(function () {
  $("#utif").click(function () {
    $(".assign-dep").show();
  });
  $("#dif").click(function () {
    $(".assign-dep").hide();
  });

  if (window.innerWidth < 768) {
    $("body").removeClass("sidebar-open");
    $("#sidebarClose").hide();
    $("#sidebarOpen").show();
  } else {
    $("body").removeClass("sidebar-collapsed");
    $("#sidebarOpen").hide();
    $("#sidebarClose").show();
  }

  $("#sidebarClose").on("click", function () {
    if (window.innerWidth < 768) {
      $("body").removeClass("sidebar-open");
    } else {
      $("body").addClass("sidebar-collapsed");
    }

    $("#sidebarClose").hide();
    $("#sidebarOpen").show();
  });

  $("#sidebarOpen").on("click", function () {
    if (window.innerWidth < 768) {
      $("body").addClass("sidebar-open");
    } else {
      $("body").removeClass("sidebar-collapsed");
    }

    $("#sidebarOpen").hide();
    $("#sidebarClose").show();
  });
});
