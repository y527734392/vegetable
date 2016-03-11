/**
 * Created by muyi on 16/3/11.
 */
//if weChat
function is_weixn(){
    var ua = navigator.userAgent.toLowerCase();
    alert(ua);
    if(ua.match(/MicroMessenger/i)=='micromessenger') {
        return true;
    }else {
        return false;
    }
}
$(function(){
    is_weixn();
});
