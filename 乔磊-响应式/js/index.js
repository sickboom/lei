/**
 * Created by hxsd on 2016/10/15.
 */
$(function(){
    $(".header .daohang a>i").click(function(){
        $(" .header .model").slideToggle("slow" , function(){
        });
    });


    var images=["images/banner.jpg","images/banner-two.jpg","images/banner.jpg"]
    var index=1;
    setInterval(function(){
        if(index==images.length){
            index=0;//循环开始从头再来
        };
        $(".background").animate({opacity:0},1000,function(){
            $(this).css("background",'url("'+images[index]+'")')
                .animate({opacity:1},1000)
            index++;
        })
    },2000)

})