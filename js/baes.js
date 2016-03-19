/**
 * Created by muyi on 16/3/11.
 */
//weChat
function is_weChat(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=='micromessenger') {
        return true;
    }else {
        return false;
    }
}
if(!is_weChat()){
    //*location.href='./weChat.html';
};
$(function(){

});
