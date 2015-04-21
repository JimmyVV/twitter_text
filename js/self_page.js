// JavaScript Document<script type="text/javascript" src="../JqueryModel_min_Plugin/jquery.js">
	$(function(){
		$(".click_event_icon")
			.toggle(function(){		//循环显示
				$(this).find("a").removeClass("language_Iink").addClass("language_Iink_change");
				$(".language_content").show();
				$(this).find(".arrow").show();
				$(".language").unbind("mouseover").unbind("mouseout");
			},function(){
				$(this).find("a").removeClass("language_Iink_change").addClass("language_Iink");
				$(".language_content").hide();
				$(".language").bind({
					mouseover:function(){$(this).find(".arrow").show();},
					mouseout:function(){$(this).find(".arrow").hide();}
							});
			});
		
		$(".language").bind({
			mouseover:function(){$(this).find(".arrow").show();},
			mouseout:function(){$(this).find(".arrow").hide();}
		});
		
		
		
	})