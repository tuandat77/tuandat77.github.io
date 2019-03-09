$(function(){

//xác định vị trí của class so với vị trí top
	console.log($('.top2').offset().top); //xác định vị trí của class top 2 so với vị trí top của web

// cách làm cuộn chuột đến 1 vị trí trên web
 
 	$('.n1').click(function(){
 		$('body').animate({scrollTop:$('.top6').offset().top});
 		return false;
	})



// xác định độ cao của màn hình
 	var docao = $(window).height(); // hàm này để xem được độ cao của màn hình khi cho to hay cho nhỏ màn hình
	console.log(docao); // hiện trên màn hình console.log độ cao của màn hình

	$('.top1').css({'height':docao});
	$(window).resize(function() {
		var docao = $(window).height();
		$('.top1').css({'height':docao});
	});

	$('.nutmenu').click(function() {
		$('.menuphai').addClass('ra');
		return false; // đây là để chống lại khi sử dụng link cua the 'a' mà chỉ sử dụng xong khi sử dụng addclass
	});

	$('.tat').click(function() {
		$('.menuphai').removeClass('ra'); 
		return false; // đây là để chống lại khi sử dụng link cua the 'a' mà chỉ sử dụng xong khi sử dụng addclass
	});
})  
 