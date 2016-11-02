/**
 * Created by lenovo on 2016/11/2.
 */
;(function () {

    window.Background = function () {
        this.x = 0;

        this.image = game.Robj["bg"];

        game.actors.push(this);
    }

    Background.prototype.update = function () {
        this.x--;
        if(this.x<-(game.canvas.width)){
            this.x=0;

        }

    }
    Background.prototype.render = function () {
        //渲染图片并且拉伸图片到canvas的宽度和高度
        game.ctx.drawImage(this.image, this.x, 0, game.canvas.width, game.canvas.height);
        game.ctx.drawImage(this.image, this.x+game.canvas.width, 0, game.canvas.width, game.canvas.height);


    }

})();
