/**
 * Created by lenovo on 2016/11/2.
 */

;(function () {


    /*  Object.prototype.count=function(){
     (Object.prototype.hasOwnProperty("_count_"))?function(){
     return this ._count_;
     }:function(){
     return Object.hasOwnProperty(self).length

     };

     };*/


//中介者模式


    window.Game = function () {

        this.canvas = document.getElementsByTagName("canvas")[0];
        this.ctx = this.canvas.getContext("2d");
        this.frameNumber = 0;


        //资源清单
        this.R = {

            "beijing1": "./images/slide3-2.jpg",
            "bg": "./images/bg001.png",
            "land": "./images/land.png",
            "pipe_down": "./images/pipe_down.png",
            "pipe_up": "./images/pipe_up.png",
            "bird": "./images/bird.png",
            "bird1": "./images/bird1.png",
            "bird2": "./images/bird2.png",
            "grade": "./images/grade.png"

        }
        this.Ramount = Object.getOwnPropertyNames(this.R).length;

        //存放资源图片
        this.Robj = {};

        //存放界面组件

        this.actors = [];
        //存放管道
        this.pipes = new Array();
        //加载图片
        this.loadResource();


    }

    Game.prototype.loadResource = function () {
        var already = 0;
        //加载资源
//请求资源列表中的所有文件
        for (var k in this.R) {
            this.Robj[k] = new Image();
            this.Robj[k].src = this.R[k];
            var self = this;
            this.Robj[k].onload = function () {
                already++;
                self.ctx.fillText("正在加载图片：" + already + "/" + Object.getOwnPropertyNames(self.R).length, 100, 100);
                if (already === self.Ramount) {
                    self.start();
                    self.bindEvent();
                }

            }
        }


    };
    Game.prototype.start = function () {


        var self = this;
        var bg = new Background();
        var land = new Land();
        this.bird = new Brid();
        var grade = new Grade();


        //方式一
        setInterval(function () {
            self.mainLoop()

        }, 20);


    };//end start
    Game.prototype.mainLoop = function () {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //真编号
        this.frameNumber++;

        //画背景

        this.ctx.drawImage(this.Robj["beijing1"], 0, 0);
        _.each(this.actors, function (element, index, list) {



                element.update();
                element.render();

            }//fun
        )//each

        if (this.frameNumber % 150 === 0) {
            this.pipes.push(new Pipe());

        }


        this.ctx.fillText("BO:" + this.frameNumber, 10, 10);


    }//mainloop


    Game.prototype.bindEvent = function () {
        var self = this;
        this.canvas.onmousedown = function () {
           if(self.bird){
               self.bird.flyHigh();
           }

        }
    }//end bindEvent

})();
