/*  
	Your Chefkeeper.org
	Author: Amy Litlefield-Bousamra
*/

(function($) {

    /*Toggle lynda.com*/
    $(function() {

        $(".list tr:even").addClass("stripe1"); //select the class "list" id tr even rows add stripe
        $(".list tr:odd").addClass("stripe2"); //selects the list and adds the 2nd stripe

        $(".list tr").hover( //again tells where the hover is on the class "list"
            function() {
                $(this).toggleClass("highlight"); //toggles a higlight effect
            },
            function() {
                $(this).toggleClass("highlight");
            }
        );

        $(".list").on("click", "tr", function showText (evt) {
            //alert($(this).text());
        })
    });

    $("tr").not(':first').hover(
        function () {
            $(this).css("background","#47AFAF"); //hover background color/
        },
        function () {
            $(this).css("background","");
        }
    );


    /*NOTE: *accordian: I added the hide feature but
    found a demo of this accordion that I used for this project at @vivekarora blog
    using jquery cssdeck lab*/

    $('.accordion div.data').hide(); // select accordian div data and hide it..hides the accordian until accordian is clicked

    var allAccordions = $('.accordion div.data'); //sets variable for the class accordian
    var allAccordionItems = $('.accordion .accordion-item img'); //sets variable for accordian item which is the images


    $('.accordion > .accordion-item').click(function(){ //select all in the accordian class a parent of the accordian item
        allAccordionItems.removeClass('open'); //remove the class/ first layer and open the accordian
        allAccordions.slideUp();  //slide up all the accordians
        allAccordionItems.removeClass('open'); //removes
        $(this).addClass('open'); //opens accordian selected
        $(this).next().slideDown(); //close
        return false; //ends

    });



    /********sub Menu *************/

    /*aha example lynda.com*/

    $(function() {


        var $submenu = $('.submenu'); //set variable

        $('.submenu').find('a').on('click', function (e) { //find the class of submenu action=click
            e.preventDefault(); //prevents looping

            $('#hideindex').hide(); //figured out how to hide content with "hide"

            var $desc = $('.indexload'); //this sets the place where these html pages are going to load to I have a div with a class of indexload.
            switch ($(this).attr('href')) {
                case 'dinnerEntrees.html': //in the case of dinnerEntrees.html
                    $desc.load('dinnerEntrees.html'); //load the dinnerEntree page to the div .indexload
                    break; //stop and switch to next case...
                case 'lunchEntrees.html':
                    $desc.load('lunchEntrees.html'); //load the lunchEntree page to the div .indexload
                    break;
                case 'breakfastEntrees.html':
                    $desc.load('breakfastEntrees.html'); //load the breakfastEntree page to the div .indexload and so forth...
                    break;
                case 'casseroles.html':
                    $desc.load('casseroles.html');
                    break;
                case 'pastaPizza.html':
                    $desc.load('pastaPizza.html');
                    break;
                case 'meats.html':
                    $desc.load('meats.html');
                    break;
            }



        });

    });

    /****************** tool tip************************/

    $('.masterTooltip').hover(function () { //select class masterTooltip add hover features
        //hover over code
        var title = $(this).attr('title'); //variable title.
        $(this).data('tipText', title).removeAttr('title'); //this data is tipText, and title remove the title attribute
        $('<p class="tooltip"></p>') //creates a new paragraph
            .text(title)
            .appendTo('body') //append the p tag to the body
            .fadeIn('slow'); //fade in slow to hover...

    }, function () {
        //hover out code
        $(this).attr('title', $(this).data('tipText')); //get the title and tiptext
        $('.tooltip').remove(); //remove tooltip
    }).mousemove(function (e) {
        var mousex = e.pageX + 20; //get X coordinates sets coordinates for mouse
        var mousey = e.pageY + 10; //get Y coordinates
        $('.tooltip')
            .css({top: mousey, left: mousex })
    });


    /*$(function() {

        $("#recipeList tr:even").addClass("stripe1");
        $("#recipeList tr:odd").addClass("stripe2");

        $("#recipeList tr").hover(
            function() {
                $(this).toggleClass("highlight");
            },
            function() {
                $(this).toggleClass("highlight");
            }
        );

        $("#recipeList").on("click", "tr", function showText (evt) {
            alert($(this).text());
        })
    });*/



    /*add modal*/
    //.modalClick=the selector
//on-modal
    $('.modalClick').on('click',function(event){ //selects class .modalClick action=click function
        event.preventDefault(); //stops looping
        $('#overlay') //gets the id overlay content and fades it in
            .fadeIn() //fade in overlay
            .find('#modal') //find the modal id
            .fadeIn(); //fade in modal id
    });
//off-modal
    $('.close').on('click', function(event){ //closes modal
        event.preventDefault();
        $('#overlay') //overlay id
            .fadeOut() //fade out the overlay
            .find('#modal') //find the #modal id
        .fadeOut(); //fade out the modal
    });


    //fading status option
   /* $('.mystats').mouseover(function(){
        $(this).fadeTo(100,.3);
    });

    $('.mystats').mouseover(function(){
        $(this).fadeTo(100,1);*/
    //});


    /*these all are the same concept...select, action prevent looping and assign to a page
    /*go to register page*/

    $("#signupbtn").on("click", function(e){ //select signupbtn id action=click function
        e.preventDefault(); //stop looping
        window.location.assign("register.html"); //go to register page. assigns it to page
    });

     /*go to cookbook page*/
   $(".projectsbtn").on("click", function(e){
        e.preventDefault();
        window.location.assign("cookbook.html"); //go to cookbook page.
    });

    /*go to admin page*/
    $(".dashboard").on("click", function(e){
        e.preventDefault();
        window.location.assign("admin.html"); //go to admin/dashboard page.
    });

    /*goto projects page*/

    $(".taskbtn").on("click", function(e){
        e.preventDefault();
        window.location.assign("projects.html"); //go to projects page.
    });

    /*goto image gallery*/

    $(".userbtn").on("click", function(e){
        e.preventDefault();
        window.location.assign("gallery.html"); //go to gallery page.
    });

    /*$('.addbtn').on('click',function(e){
        e.preventDefault();
        window.location.assign('add.html')
    });*/




/****************************** Datepicker plugin*********************************/

    $(function() {
        $( ".datepicker" ).datepicker();
    });
    /*
    ===============================================
    ========================= APPLICATION FUNCTIONS
    */
	
	
	var checkLoginState = function(){
		$.ajax({
			url: 'xhr/check_login.php',//gets php and data
			type: 'get',
			dataType: 'json',
			success: function(response){
				// if user, loadApp()
				// if error, loadLanding()
			}
		});
	};
	
	

	// 	============================================
	//	SETUP FOR INIT
		
	var init = function(){
	
		checkLoginState();
	};
	
	
	init();
	
		
	/*
	===============================================
	======================================== EVENTS	
	*/



//From a tutorial on image rotator-Lynda.Com

    $(function() {
        // create the image rotator
        setInterval("rotateImages()", 2000);
    });

    function rotateImages() { //rotate images
        var oCurPhoto = $('.photoShow div.current'); //sets variable for current photo
        var oNxtPhoto = oCurPhoto.next(); //sets variable for next photo
        if (oNxtPhoto.length == 0) //if statement for going through number of photos
            oNxtPhoto = $('.photoShow div:first'); //show first photo

        oCurPhoto.removeClass('current').addClass('previous'); //remove photo add another photo
        oNxtPhoto.css({ opacity: 0.0 }).addClass('current').animate({ opacity: 1.0 }, 1000, //sets opacity and speed of photos
            function() {
                oCurPhoto.removeClass('previous'); //remove previous so keeps rotating
            });
    }



    /*
    ==================================== END EVENTS
    ===============================================
    */

/*navigation lesson lynda.com*/

        // Create dropdown menus
    // Create dropdown menus
   /* $('.nav').css('display','block');
    $('.nav > a').submenu({
        effect : 'slide',
        speed : 250,
        timeout : 0,
        nbsp : false
    });*/


    //$(".nav").click(function(){
                   // $(".submenu").animate({left:'275px'});


            //});


    /************************** LOGIN *****************************/

$('#signinButton').click(function(){ //selector: signinButton action=click
    var user = $('#user').val(); //whatever value is in the user to store the value
    var pass = $('#pass').val(); //sets password value
    console.log("This notifies you if the password is working");
    $.ajax({
        url:'xhr/login.php', //gets php and data
        type:'post',
        dataType: 'json',
        data: {
            username: user,
            password: pass
        },
        success:function(response){
        console.log("Test User");
        if(response.error){ //if an error notify
                alert(response.error);
        }else{ //tell it where to go
            window.location.assign('admin.html') //else send user to admin page

        }

    }

});

});

    /* ************************* LOGOUT ************************ */


    $('#logOut').click(function(e){ //select logOut action:click
        e.preventDefault;
        $.get('xhr/logout.php', function(){ //pulling the url of the php folder
            window.location.assign('index.html'); //on window location of "logout" goto the home page/index.html
        })
    });


    /************ Register ***************/
    $('#register').on('click',function(){
        var firstname = $('#first').val(), //getting the value of each id to store or do something with
            lastname = $('#last').val(),
            username = $('#userName').val(),
            email = $('#email').val(),
            password = $('#password').val();
            console.log(firstname+' '+lastname+' '+username+' '+email+ ' '+password);

        $.ajax({
            url: 'xhr/register.php', //pulling from xhr file
            type: 'post',
            dataType: 'json',
            data: {
                firstname: firstname, //these match the variable names
                lastname: lastname,
                username: username,
                email: email,
                password: password
            },

            success: function(response){
                if(response.error){
                    alert(response.error);
                }else{
                    window.location.assign('admin.html');
                }
            }
        });

    });

    /************** Display Username *******************/

    $.getJSON("xhr/check_login.php", function(data){ //ajax command get json calling php file function called data
        console.log(data);
        $.each(data, function(key, val){ //looking for first name and putting the value in the div
            console.log(val.first_name);
            $(".userid").html("Welcome:" + val.first_name);
        })
    });



    /************** NEW PROJECTS *******************/
    $('#addButton').on('click', function(e){ //get id addButton action = click function
        e.preventDefault();
        var projName = $('#projectName').val(),//set a value will enter a value into the window of each..
        projDesc = $('#projectDescription').val(),
        projDue = $('#projectDueDate').val(),
        status= $('input[name = "status"]:checked').prop("id");

        $.ajax({
            url: "xhr/new_project.php", //pulls from xhr folder the php
            type: "post",
            dataType: "json",
            data: {
                projectName: projName,
                projectDescription: projDesc,
                dueDate: projDue,
                status: status

            },
            success: function (response) {
                console.log('Testing for success');

                if (response.error) {
                    alert(response.error);
                }else{
                    window.location.assign("projects.html");
                }

            }

    });

    });

/************************ GET PROJECTS *****************************/

var projects = function() {
    $.ajax({
        url: 'xhr/get_projects.php', //gets the php file
        type: 'get',
        dataType: 'json',
        success: function (response) { //code for response error
            if (response.error) {
                console.log(response.error);
            }else{

                for (var i = 0, j = response.projects.length; i < j; i++) { //js for loop starts at 0 adds 1
                    var result = response.projects[i];

                    $(".projects").append( //append to the projects class
                            //'<div style = "border:1px solid #B94629">' +
                        '<div id="sortable" class="ui-state-default">'+
                            "<input class = 'projectid' type='hidden' value=' " + result.id + "'>" + //hides projectid
                            "Name of Event:" + result.projectName + "<br>" + //concat string with the result of the projectName value entered.
                            "Chef Notes:" + result.projectDescription + " " + "<br>" + //concat string with the result of the projectDescription value entered.
                            "Event Date:" + result.dueDate + " " + "<br>" + //concat string with the result of the dueDate value entered.
                            "Status:" + result.status + "<br>" //concat string with the result of the status value entered.
                            + '<button class="deletebtn">Delete</button>' //delete button
                            //+ '<buttton class="editbtn">Edit</buttton>'
                            + '</div><br>'
                    );

                }



                $('.deletebtn').on('click', function (e) {
                    var pid = $(this).parent().find(".projectid").val(); //look for the data/parent of project id.
                    console.log('test delete');
                    $.ajax({
                        url: 'xhr/delete_project.php', //pulls from xhr folder
                        data: {
                            projectID: pid
                        },
                        type: 'POST',
                        dataType: 'json',
                        success: function (response) {
                            console.log('Testing for success');

                            if (response.error) { //if error alert user
                                alert(response.error);
                            } else {
                                window.location.assign("projects.html"); //if no error goto projects page
                            }

                        }
                    });

                }); //End Delete

            }

        }
    })

};
projects();


 /******** to make table clickable...tutorial at stackflow.com ******/


 $(function() {
     $(".clickableRow").click(function() { //select class.clickable...placed on tr action is a click function
         window.document.location = $(this).attr("href"); //goto the link identfied page..
     });
 });



/*************** DRAG AND DROP ***********for Recipe/entree01 Page on page*************/


    /*$(function() {
        $( ".draggable" ).draggable();
        $( ".droppable" ).droppable({
            drop: function( event, ui ) {
                $( this )
                    .addClass( "ui-state-highlight" )
                    .find( "image" )
                    .html( "Dropped!" );
            }
        });
    });*/


    /********************** Sortable ************************/

    $(function() {
        $( "#sortable" ).sortable(); //select id sortable
        $( "#sortable" ).disableSelection(); //disable the selection
    });

})(jQuery); // end private scope


	

