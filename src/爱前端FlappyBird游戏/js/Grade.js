/**
 * Created by lenovo on 2016/11/2.
 */
;(function () {

    window.Grade = function () {
        this.x = 0;

        this.image = game.Robj["grade"];

        game.actors.push(this);
    }

    Grade.prototype.update = function () {
        this.x--;
        if(this.x<-(game.canvas.width)){
            this.x=0;

        }

    }
    Grade.prototype.render = function () {
        //渲染图片并且拉伸图片到canvas的宽度和高度
        game.ctx.drawImage(this.image,50,20);

    }

})();
