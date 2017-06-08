"use strict";// 函数级别严格模式语法
var Life = function(x,y,sprite) {
    //生物，传入三个参数，横纵坐标和雪碧图对应的位置
    this.x = x;
    this.y = y;
    this.sprite = sprite;
}
Life.prototype.render = function() {
    //自带的原型reder函数
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

var theWorldLevel = 1;//默认的世界等级
var EnemyBugImg = 'images/enemy-bug.png';//所有的bug都用用一个图片
var PlayerImg = 'images/char-boy.png';//玩家的img

var Enemy = function(x,y,z) {
    //传入三个参数，对应父类的参数
    Life.call(this, x, y, z);
    return this;
};

Enemy.prototype = Object.create(Life.prototype);//继承父类原型
Enemy.prototype.constructor = Enemy; //恢复正确的constructor
var randomLocationY = function(){return -Math.random()*800-50;}//随机初始的x坐标
Enemy.prototype.update = function() {
    this.x+=theWorldLevel*1.5; //随着世界等级增加，对应的x轴运动速度也增加
    if(this.x>525){this.x = randomLocationY();}//除了canva画布之外，并且不可见之后就重新出现
};

var Player = function(x,y,z,lifeCounts){
    this.lifeCounts = lifeCounts;
    Life.call(this, x, y, z);
    //相对于父类，多了初始化的生命值属性
}
//和Enemy一样从父类继承过来，并委托回正确的创建者
Player.prototype = Object.create(Life.prototype);
Player.prototype.constructor = Player;

Player.prototype.life = function(){
    //跟dom中的文档节点对应起来
    document.getElementById("playerLife").innerHTML = this.lifeCounts;
    if(this.lifeCounts==0){
        playerReder(10);alert("恭喜你！进行关卡达到了第"+theWorldLevel+"关!");
        //输了就弹出到了第几关，重新渲染玩家，并让世界等级归一
        theWorldLevel = 1;
    }
}
Player.prototype.update = function(){

    player.checkLoction();//检测玩家和bug位置的函数
    if(this.y<0){
        playerReder(1);//到了河，就会打印出胜利
        return console.log("win!");
    }
};
Player.prototype.handleInput = function(e){
    // console.log(e);
    var TileWidth = 101;//每次x移动的像素
    var TileHeight = 83;//每次y移动的像素
    var RightMost = 402;//最大的x，不可超出
    var LeftMost = -2;//最小的x，不可超出
    var TopMost = -92;//最小的y，不可超出
    var BottomMost = 482;//最大的y，不可超出
        switch(e){
            //检测键盘输入的按键。一一对应玩家的坐标属性
            case "right":
            this.x+=TileWidth;
            if(this.x>RightMost){this.x-=TileWidth};
            break;
            case "left":
            this.x-=TileWidth;
            if(this.x<LeftMost){this.x+=TileWidth};
            break;
            case "up":
            this.y-=TileHeight;
            if(this.y<TopMost){this.y+=TileHeight};
            break;
            case "down":
            this.y+=TileHeight;
            if(this.y>BottomMost){this.y-=TileHeight};
            break;
            default:
            break;
        }
        return this.x;
};

// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
var allEnemies = (function(){
        var AllEnemies = [];//数组
        var EnemyXGap = 83;//横向间隔
        var EnemyInitX = 63;//纵向间隔
        var EnemyA = new Enemy(randomLocationY(),EnemyInitX,EnemyBugImg);
        var EnemyB = new Enemy(randomLocationY(),EnemyInitX+EnemyXGap,EnemyBugImg);
        var EnemyC = new Enemy(randomLocationY(),EnemyInitX+EnemyXGap*2,EnemyBugImg);
        var EnemyD = new Enemy(randomLocationY(),EnemyInitX+EnemyXGap*3,EnemyBugImg);
        var EnemyE = new Enemy(randomLocationY(),EnemyInitX,EnemyBugImg);
        var EnemyF = new Enemy(randomLocationY(),EnemyInitX+EnemyXGap,EnemyBugImg);
        var EnemyG = new Enemy(randomLocationY(),EnemyInitX+EnemyXGap*2,EnemyBugImg);
        var EnemyH = new Enemy(randomLocationY(),EnemyInitX+EnemyXGap*3,EnemyBugImg);
        return AllEnemies = [EnemyA,EnemyB,EnemyC,EnemyD,EnemyE,EnemyF,EnemyG,EnemyH];
})();//包含在一个立即执行并return数组的函数内部；

// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    // console.log(e);
    player.handleInput(allowedKeys[e.keyCode]);
});

Player.prototype.checkLoction = function(){
    for(var i = 0; i <allEnemies.length; i++){
         if(
            (Math.abs(allEnemies[i].x-player.handleInput(0))<50)
            &&
            (Math.abs(allEnemies[i].y-player.y))<20){
            playerReder(0);
            console.log("lose");
         }
    }
}
var player;//玩家
var playerInitX = 200;//默认x
var playerInitY = 405;//默认y
var playerReder = function(e) {
    //从上面传来的e
    if(e==10){
        //首次初始为10
        player = new Player(playerInitX,playerInitY,PlayerImg,e);
        player.life();
    }else{
    switch(e){
        case 0:
        //输了，血量-1
        player.lifeCounts--;
        player = new Player(playerInitX,playerInitY,PlayerImg,player.lifeCounts);
        player.life();
        break;
        case 1:
        //赢了，位子重置
        player = new Player(playerInitX,playerInitY,PlayerImg,player.lifeCounts);
        theWorldLevel ++;//每过一关世界等级+1
        document.getElementById("theWorldLevel").innerHTML = theWorldLevel;
        player.life();
        break;
    }
}

}
playerReder(10);




// function screenXY(event){
//     var x, y;
//     document.getElementsByTagName('canvas')[0].getBoundingClientRect()
//     x=event.screenX;
//     y=event.screenY;
//     console.log("X:" + x + ",Y:" + y)
// };
