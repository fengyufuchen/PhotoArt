/**
 * Created by lenovo on 2016/11/2.
 */
;(function () {

    window.Land = function () {
        this.x = 0;

        this.image = game.Robj["land"];

        game.actors.push(this);
    }

    Land.prototype.update = function () {
        this.x--;
        if(this.x<-(game.canvas.width)){
            this.x=0;

        }

    }
    Land.prototype.render = function () {
        //渲染图片并且拉伸图片到canvas的宽度和高度
        game.ctx.drawImage(this.image, this.x, game.canvas.height-129,game.canvas.width,129);
        game.ctx.drawImage(this.image, this.x+game.canvas.width, game.canvas.height-129,game.canvas.width,129);


    }

})();
