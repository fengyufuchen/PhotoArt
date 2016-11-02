/**
 * Created by lenovo on 2016/11/2.
 */
;(function () {

    window.Brid = function () {
        this.x = 0;

        this.imageArray = [game.Robj["bird"], game.Robj["bird1"], game.Robj["bird2"]];
        this.wing = 0;
        this.x = game.canvas.width / 3;
        this.y = 100;
        this.f = 0;
        this.state = "A";
        this.angle = this.f / 28;
        this.distance = 0;

        game.actors.push(this);
    }

    Brid.prototype.flyHigh = function () {

        this.state = "B";//向上
        this.f = 0;
    }

    Brid.prototype.update = function () {
        if (game.frameNumber % 4 == 0) {
            this.wing = ++this.wing % 3;
        }
        if (game.frameNumber % 40 == 0) {

            if (this.state === "A") {
                this.f++;

            }
            if (this.state === "B") {
                this.f--;

            }

        }
        if (this.state ==="B" && this.distance < 22) {
            this.distance++;
        } else if (this.state ==="B" && this.distance >= 22) {
            this.distance = 0;
            this.state="A";

        }



        if (this.state === "A") {
            this.distance=0;
            this.y++;
        } else {
            this.y--;
        }

        if (this.y > 500 || this.y < 0) {
            this.y = 100;
        }
        this.angle = this.f / 28;


    }
    Brid.prototype.render = function () {
        //渲染图片并且拉伸图片到canvas的宽度和高度
        /*
         drawImage的第一个参数表示要绘制的图像，第二个参数和第三个参数是sourcex ,sourceY,表示图像将要被绘制的区域的左上角，这个参数是指定要绘制图像的哪个位置；
         sourceWidth，sourceheight表示要图像要绘制区域的大小；  deex desy表示要绘制的图像区域的左上角的画布坐标，也即是指定了在画布的哪个位置开始绘制
         desWidth destHeight表示图像区域所要绘制的画布大小。
         前四个数字对象用于图像，后四个参数用于指定画布的属性。

         */
        game.ctx.save();

        game.ctx.translate(this.x + 24, this.y + 24);
        game.ctx.rotate(this.angle);
        console.log(this.f);
        game.ctx.drawImage(this.imageArray[this.wing], -24, -24);

        game.ctx.restore();

    }

})();
