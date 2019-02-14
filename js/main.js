$(function() {
// 1.需求：在超小屏幕xs(<768px)时轮播项以图片的元素展示以保证等比例缩放，
//        其他条件下以背景图的形式展示，高度固定在410px。
  
  //定义屏幕的resize事件
  var $window = $(window);
 
  function resize (){
  	// 获取屏幕宽度
  	var width = $window.width();
  	// 判断当前屏幕若为超小屏幕，则轮播图使用图片展示
  	if(width < 768){
  		// 遍历轮播图中的每一项
  		$('#carousel-item .carousel-inner .item').each( function(i,item){
  			var $item = $(item);
  			// 获取自定义属性的值
  			var carouselSrc = $item.data('imgxs');
            // 设置样式
  			$item.html('<img src="'+carouselSrc+'" alt=" ">')
  			.css('background', '')
  			.css('height','auto');
  		});
  		
  	} else {
  		$('#carousel-item .carousel-inner .item').each( function (i,item){
  			var $item = $(item);
  			var carouselSrc = $item.data('imgsrc');
  			// console.log(carouselSrc);
  			$item.css('backgroundImage',carouselSrc)
  			     .css('height','410px')
  			     .html('');
  		});
  			
  	}
  }

  // 使用trigger方法自动触发窗口的resize事件
  $window.on('resize',resize).trigger('resize');

   // 2.初始化提示工具
   
  $('[data-toggle="tooltip"]').tooltip();

  // 3.新闻资讯标题获取
  $('.news-item').on('click',function(){
  		var title = $(this).data('title');
  		$('#news-list .news-title').text(title);

  });


});