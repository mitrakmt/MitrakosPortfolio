'use strict';

      app.controller('HomeController', function($scope, $document){

        // Skills
        jQuery(document).ready(function(){
    	     jQuery('.skillbar').each(function(){
    		       jQuery(this).find('.skillbar-bar').animate({
    			          width:jQuery(this).attr('data-percent')
    		       },6000);
    	     });
        });

        setTimeout(function() {
          $('#html-pourcent').html('90%');
        },2800);

        setTimeout(function() {
          $('#css-pourcent').html('90%');
        },3500);

        setTimeout(function() {
          $('#javascript-pourcent').html('90%');
        },4200);

        setTimeout(function() {
          $('#firebase-pourcent').html('70%');
        },4900);

        setTimeout(function() {
          $('#angular-pourcent').html('85%');
        },4500);

        setTimeout(function() {
          $('#github-pourcent').html('90%');
        },7200);

        $scope.color = {
          red: 0,
          green: 159,
          blue: 92
        };

        $scope.rating1 = 3;
        $scope.rating2 = 2;
        $scope.rating3 = 4;
        $scope.disabled1 = 0;
        $scope.disabled2 = 70;



        var link = $('.card-nav-link');
        var linkParent = link.parent('li');
        var section = $('.card-section');
        var sectionContent = section.find('*');

        var switchTab = function() {
        	var p = $(this).parent('li');
        	var i  = p.index();
        	var s = section.eq(i);
        	var c = s.find('*');

        	section.removeClass('active');
        	sectionContent.removeAttr('style');
        	s.addClass('active');

        	c.css({
        		transform: 'none',
        		opacity: 1
        	});

        	linkParent.removeClass('active');
        	p.addClass('active');

        	return false;
        };

        link.on('click', switchTab);

        function activeFirst() {
        	section.first().addClass('active');
        	section.first().find('*').css({
        		transform: 'none',
        		opacity: 1
        	});
        	linkParent.first().addClass('active');
        }

        activeFirst();

      });
