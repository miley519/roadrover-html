//车型选择下拉菜单切换
$("#accordion").on('click','.item',function(element){
	var index = $(this).index();
	$(this).addClass('active').siblings().removeClass('active');
	$("#accordion .collapse").eq(index).show().siblings().hide();
	if(index==1){
		$("#main").hide();
	}else{
		$("#main").show();
	}
});
//车型二级菜单的三级菜单切换
$("#car #topcar").on('click','dd',function(element){
	var index = $(this).index();
	var car_id = $(this).data('id');
	$("#car_type").val(car_id);
	$("#car #topcar dd").removeClass('active');
	$(this).addClass('active');
	$("#subcar").show();
});
$("#car .list-subcar").on('click','li',function(element){
	var index = $(this).index();
	var index2 = $(this).parents(".sublist").index();
	var car_id = $(this).data('id');
	$("#car_type").val(car_id);
	$(this).addClass('active').siblings().removeClass('active');
	$("#topcar").hide();
	$("#car .sublist").eq(index2+1).show().siblings().hide();
});

//支付订单切换选择
$("#list-choice").on('click', '.list-item', function(element) {
	/* Act on the event */
	var index = $(this).index();
	var choice = $(this).data('choice');
	$(this).find(".choose").addClass("icon-ok-sign").removeClass('icon-circle-blank');
	$(this).siblings().find(".choose").removeClass("icon-ok-sign").addClass('icon-circle-blank');
	//$("#choice").val(index);
	$("#choice").val(choice);
});

//地址切换选择
$("#list-choice2").on('click', '.list-item .box-lf,.list-item .box-mid', function(element) {
	/* Act on the event */
	var $parent = $(this).parents(".list-item");
	var index = $parent.index();
	var choice = $parent.data('choice');
	$parent.find(".choose").addClass("icon-ok-sign").removeClass('icon-circle-blank');
	$parent.siblings().find(".choose").removeClass("icon-ok-sign").addClass('icon-circle-blank');
	//$("#choice").val(index);
	$("#choice").val(choice);
});

//是否使用优惠券
$("#use-ticket").on('click', '.panel-item', function(element) {
	/* Act on the event */
	$(this).toggleClass('choosed');
	var price1 = $("#price1").val();
	var price2 = $("#price2").val();
	var price3;
	if($(this).hasClass('choosed')){
		price3 = price1 - price2;
	}else{
		price3 = price1;
	}
	price3 = new Number(price3);
	price3 = price3.toFixed(2);
	$("#price3").val(price3);
	$("#payPrice").html("￥"+price3);
});

//评价星级的点选
$("#comment-star").on('click','.icon-star',function(element){
	var $stars = $(this).parents(".star-group").find(".icon-star");
	var index = $(this).index();
	$("#star").val(index+1);
	for(var i=0;i<5;i++){
		if(i<=index){
			$stars.eq(i).removeClass("empty");
		}else{
			$stars.eq(i).addClass("empty");
		}
	}
})