var errorModal = '<div class="modal fade in modal-bg" id="errorModal" style="display:none;">\
				  <div class="modal-dialog">\
				    <div class="modal-content">\
				      <div class="modal-body">\
				        <p id="msg">出错了</p>\
				      </div>\
				      <div class="modal-footer">\
				        <button type="button" class="btn btn-red" data-dismiss="modal">确定</button>\
				      </div>\
				    </div>\
				  </div>\
				</div>\
				<div class="modal-backdrop fade in" style="display:none;"></div>';
$("body").append(errorModal);
$("body").on('click','#errorModal.modal .btn',function(){
	$("body").removeClass('modal-open');
	$(this).parents(".modal").hide();
	$(".modal-backdrop").hide();
});
function show_window(msg){
	/* Act on the event */
	$("body").addClass('modal-open');
	$("#errorModal.modal").show();
	$(".modal-backdrop").show();
	$("#errorModal #msg").text(msg);
}