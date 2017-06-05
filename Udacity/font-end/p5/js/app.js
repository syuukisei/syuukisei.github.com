// 这是我们的玩家要躲避的敌人
var Enemy = function(x,y) {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    this.initLoction(x,y);
    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
};
var theWorldLevel = 5;
// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.initLoction = function(x,y){
    this.x = x;
    this.y = y;
}
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    this.x+=theWorldLevel;
    if(this.x>525){this.x = randomLocationY();}
};


// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var Player = function(){
    this.x = 200;
    this.y= 405;//默认的坐标
    this.spriteList = ["images/char-boy.png"];
}
Player.prototype.level = function() {
    theWorldLevel +=0.5;//世界等级+1
    alert("当前世界等级为" + (theWorldLevel-4.5)+"级")；
    return console.log("当前世界等级为" + (theWorldLevel-4.5)+"级");
}
Player.prototype.reset = function(){
      player= new Player();//重置游戏
      return console.log("Reset The Game!")
}
Player.prototype.update = function(){
    if(this.y<0){
        player.reset();
        player.level()
        return console.log("win!");
    }
    //检测到达河边，到了就重置
};
Player.prototype.render = function(){ctx.drawImage(Resources.get(this.spriteList[0]), this.x, this.y);};
Player.prototype.handleInput = function(e){
    // console.log(e);
        if(e=="right"){
            this.x+=101;
            if(this.x>402){this.x-=101};
        }else if(e=="left"){
            this.x-=101;
             if(this.x<-2){this.x+=101};
        }else if(e=="up"){
            this.y-=83;
             if(this.y<-92){this.y+=83};
        }else if(e=="down"){
            this.y+=83;
             if(this.y>482){this.y-=83};
        }
        // console.log(this.x+" "+this.y);
        return this.x;
};

// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
var randomLocationY = function(){
    return -Math.random()*800-150;
}
var EnemyA = new Enemy(randomLocationY(),63);
var EnemyB = new Enemy(randomLocationY(),146);
var EnemyC = new Enemy(randomLocationY(),229);
var EnemyD = new Enemy(randomLocationY(),312);
var allEnemies = [EnemyA,EnemyB,EnemyC,EnemyD];
// 把玩家对象放进一个叫 player 的变量里面


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
            player.reset();
            return console.log("lose!")
         }
    }
}

var player = new Player();
setInterval(player.checkLoction,10);


