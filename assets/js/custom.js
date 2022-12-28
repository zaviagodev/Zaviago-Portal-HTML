jQuery(document).ready(function($){
    jQuery('.border_blue_1').change(function(){
      if($(this).is(":checked")) {
          $('.article_1').addClass('add_blue_border');
      } else {
          $('.article_1').removeClass('add_blue_border');
      }
    });

    jQuery('.border_blue_2').change(function(){
        if($(this).is(":checked")) {
            $('.article_2').addClass('add_blue_border');
        } else {
            $('.article_2').removeClass('add_blue_border');
        }
    });

    jQuery('.border_blue_3').change(function(){
        if($(this).is(":checked")) {
            $('.article_3').addClass('add_blue_border');
        } else {
            $('.article_3').removeClass('add_blue_border');
        }
    });

    jQuery('.border_blue_4').change(function(){
        if($(this).is(":checked")) {
            $('.article_4').addClass('add_blue_border');
        } else {
            $('.article_4').removeClass('add_blue_border');
        }
    });

    jQuery('.border_blue_5').change(function(){
        if($(this).is(":checked")) {
            $('.article_5').addClass('add_blue_border');
        } else {
            $('.article_5').removeClass('add_blue_border');
        }
    });

    jQuery('.border_blue_6').change(function(){
        if($(this).is(":checked")) {
            $('.article_6').addClass('add_blue_border');
        } else {
            $('.article_6').removeClass('add_blue_border');
        }
    });

    jQuery('.border_blue_7').change(function(){
        if($(this).is(":checked")) {
            $('.article_7').addClass('add_blue_border');
        } else {
            $('.article_7').removeClass('add_blue_border');
        }
    });

    jQuery('.border_blue_8').change(function(){
        if($(this).is(":checked")) {
            $('.article_8').addClass('add_blue_border');
        } else {
            $('.article_8').removeClass('add_blue_border');
        }
    });

    jQuery('.border_blue_9').change(function(){
        if($(this).is(":checked")) {
            $('.article_9').addClass('add_blue_border');
        } else {
            $('.article_9').removeClass('add_blue_border');
        }
    });

    jQuery('.check_list_1').change(function(){
        if($(this).is(":checked")) {
            $('.listview_tr_1').addClass('bg_gray_select');
        } else {
            $('.listview_tr_1').removeClass('bg_gray_select');
        }
    });
    jQuery('.check_list_2').change(function(){
        if($(this).is(":checked")) {
            $('.listview_tr_2').addClass('bg_gray_select');
        } else {
            $('.listview_tr_2').removeClass('bg_gray_select');
        }
    });
    jQuery('.check_list_3').change(function(){
        if($(this).is(":checked")) {
            $('.listview_tr_3').addClass('bg_gray_select');
        } else {
            $('.listview_tr_3').removeClass('bg_gray_select');
        }
    });
    jQuery('.check_list_4').change(function(){
        if($(this).is(":checked")) {
            $('.listview_tr_4').addClass('bg_gray_select');
        } else {
            $('.listview_tr_4').removeClass('bg_gray_select');
        }
    });

    jQuery('.show_btn_top').change(function(){
        if($(this).is(":checked")) {
            $('.show_when_check').addClass('Show_oncheck');
        } else {
            $('.show_when_check').removeClass('Show_oncheck');
        }
    });

    jQuery('.bg_check').change(function(){
        if($(this).is(":checked")) {
            $('.check_img_des').addClass('change_bg');
        } else {
            $('.check_img_des').removeClass('change_bg');
        }
    });


  });
  

  jQuery(document).ready(function($){
    jQuery(".check").on('click',function(e){
        $("#flush-collapseThree").collapse('show');
      $("#flush-collapseOne").collapse('show');
      $("#flush-collapseTwo").collapse('show');
    });
    
    jQuery(".doCheck").on('click',function(e){
      $("#flush-collapseOne").collapse('hide');
      $("#flush-collapseTwo").collapse('hide');
      $("#flush-collapseThree").collapse('hide');
    });

    jQuery(".list_tree_icon").click(function(e){
        $(".list_tree_btn").show();
        $(".hide_now").hide();
    });
    jQuery(".grid_tree").click(function(e){
        $(".list_tree_btn").hide();
        $(".hide_now").show();
    });
    

  });
  
  