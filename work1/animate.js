function getStyle(obj,attr){
    if(obj.currenStyle){
        return obj.currenStyle[attr];
    }else{
        return getComputedStyle(obj,null)[attr];
    }
}

function animate(obj,json,callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var isStop = true;
        for(var attr in json){
            var now = 0;
            if(attr == 'opacity'){
                now = parseInt(getStyle(obj,attr)*100);
            }else{
                now = parseInt(getStyle(obj,attr));
            }
            
            var speed = (json[attr] - now)/8;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            var current = now + speed;
            if(attr == 'opacity'){
                obj.style.opacity = current/100;
            }else{
                obj.style[attr] = current + "px";
            }
        }
        if(isStop){
            clearInterval(obj.timer);
            callback&&callback();
        }
    },30)
}