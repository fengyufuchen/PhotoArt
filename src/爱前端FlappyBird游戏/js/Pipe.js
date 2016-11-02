/**
 * Created by lenovo on 2016/11/2.
 */
;(function () {

    window.Pipe = function () {
        this.image1=game.Robj["pipe_up"];

        this.image2= game.Robj["pipe_down"];
        //生成一个随机高度,该高度指明上边应该处于的高度
        this.height=Math.random()*300+69;
        this.x=300;

        game.actors.push(this);
        game.pipes.push(this);
    }

    Pipe.prototype.update = function () {

        this.x--;
        if(this.x<-52){

            //返回一个删除所有values值后的array副本，_.withour(array,*values)
            game.actors=_.without(game.actors,this);


        }


    }
    Pipe.prototype.render = function () {
        //渲染图片并且拉伸图片到canvas的宽度和高度
        //第三个参数和第四个是图像在哪个位置开始绘制；


        game.ctx.drawImage(this.image2, 0, 326-this.height,52,this.height,this.x,0,52,this.height);
        game.ctx.drawImage(this.image1, 0,0,52,300-this.height,this.x,(100+this.height),52,300-this.height);


    }

})();
