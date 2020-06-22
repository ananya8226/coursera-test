
    function button() {
      document.getElementById("collapsable-nav").classList.toggle("show");
    }
    window.onclick = function(event) {
      if (!event.target.matches('.navbar-toggle')) {
        var dropdowns = document.getElementsByClassName("nav-collapse");
        var i;
        for(i=0;i<dropdowns.length;i++) {
          var openDropdowns = dropdowns[i];
          if (openDropdowns.classList.contains('show')) {
            openDropdowns.classList.remove('show');
          }
        }
      }
    }
  