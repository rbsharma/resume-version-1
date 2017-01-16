$(document).ready(function () {

    function toggleButton(event) {
      $(".btn-active").removeClass('btn-active').addClass('btn-link');
      // console.log(event.target);
      $(event.target).removeClass('btn-link').addClass('btn-active');
    }
    function restoreHome() {
        $(".btn-active").removeClass('btn-active').addClass('btn-link');
        $("#home").removeClass('btn-link').addClass('btn-active');
    }
    function homeCentre() {
      $("#links").removeClass('home-left').addClass('home-centre');
      $("#profile").removeClass('home-left').addClass('home-centre');
    }

    function homeLeft() {
      $("#links").removeClass('home-centre').addClass('home-left');
      $("#profile").removeClass('home-centre').addClass('home-left');
    }

    function hideTabs() {
        $(".tab-right").removeClass('tab-right').addClass('tab-inner');
    }
    function showTabs(event) {
      var id = event.target.value;
      $('.tab-inner').each(function(item) {
        $(this).removeClass('tab-right').addClass('tab-inner',1000);
      });
      $("#"+id).addClass('tab-right',1000);
    }

    //Window width based jquery execution.
    if ($(window).width() >= 1182) {
        $("#home").on('click', function (event) {
                toggleButton(event);
                homeCentre();
                hideTabs();
        });

        $("#myLinks>li").find("input").on('click', function (event) {
          // console.log($(this));
          // console.log(event);
          // console.log(event.target);
          // console.log(event.target.value);
                toggleButton(event);
                homeLeft();
                showTabs(event);
        });
    } else {
        $(".tab-inner").removeClass('tab-inner').addClass('tab-small');
    }

    //Window resize based jquery function execution.
    //To check width change
    var width = $(window).width();
    $(window).resize(function(){
      if($(this).width() != width){
        width = $(this).width();
        dynamicWidth();
        }
      });

    function dynamicWidth() {
      if ($(window).width() >= 1182) {
        //check profile current state if left then do nothing, else resize.
        var profileCurrentClass = $('#profile').attr('class');
        if(!profileCurrentClass.includes('home-left')){
          //restore home button
          restoreHome();

          $("#profile").removeClass('home-left').addClass('home-centre');
          $("#links").removeClass('home-left').addClass('home-centre');
          var tabsToRemove = getTabs();
          for (var item in tabsToRemove) {
              $("#" + tabsToRemove[item]).removeClass('tab-small').addClass('tab-inner');
          }
        }
      } else {
          $("#profile").removeClass('home-left').addClass('home-centre');
          var tabsToRemove = getTabs();
          for (var item in tabsToRemove) {
              $("#" + tabsToRemove[item]).removeClass('tab-inner tab-right').addClass('tab-small');
          }
      }
    }


    //All links array
    function getTabs() {
        var links = $("#myLinks input[type='button']");
        var tabs = [];
        for (var i = 0; i < links.length; i++) {
            tabs.push(links[i].value);
        }
        return tabs;
    }
    function getExperience() {
        var finalDate = new Date();
        //var actWork = $("#accenture").text().split('-');
        //actWork[1] == 'PRESENT' ? finalDate = new Date() : finalDate = actWork[1];
        var joinDate = new Date('11/26/2014');
        var experience = finalDate.getMonth() - joinDate.getMonth() + (12 * (finalDate.getYear() - joinDate.getYear()));
        $("#experience").text(" : " + experience + " Months");
    }
    getExperience();

    $('#mymail').click(function() {
      debugger;
      window.location.href = 'mailto:er.rajesh22@gmail.com?subject="your subject here"';
    });

});

var angle = 0;
// function flip(source) {
//   angle+= 180;
//   source.style.transform = 'rotateY(' + angle + 'deg)';
// }

function flip(source) {
  if(angle == 0){
    angle = 180;
  }else{
    angle = 0;
  }
  source.style.transform = 'rotateY(' + angle + 'deg)';
}
