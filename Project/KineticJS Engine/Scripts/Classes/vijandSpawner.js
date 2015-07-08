//================================================================
//
//  Enemy Spawner
//
//================================================================
var vijandSpawner = new function () {
    //================================
    // Variables
    //================================
    this.EnemyList = [];
    this.Timer = 0;
    this.LastPlayerPos = { X: 0, Y: 0 };
    
    this.DX = null;
    this.DY = null;

    this.DX2 = null;
    this.DY2 = null;

    this.EnemySpeed = 1;
    this.Velocity = null;

    //================================
    // Functions
    //================================
    this.CreateEnemies = function(){
        for (var i = 0; i < 5; i++){
    	    ObjectEnemy.CreateEnemy({ X: 600, Y: 300});
    	}
    }

    this.Update = function () {

        for (var i = 0; i < this.EnemyList.length; i++) {

            this.DX = ObjectPlayer.getX() - this.EnemyList[i].getX();
            this.DY = ObjectPlayer.getY() - this.EnemyList[i].getY();

            this.DX2 = this.DX * this.Velocity;
            this.DY2 = this.DY * this.Velocity;

            this.EnemyList[i].Angle = Math.atan(this.DY / this.DX);

            if (ObjectPlayer.getX() > this.EnemyList[i].getX()) {
                this.Velocity = -this.EnemySpeed;
            } else {
                this.Velocity = this.EnemySpeed;
            }

            this.EnemyList[i].setX(this.EnemyList[i].getX() - Math.cos(this.EnemyList[i].Angle) * this.Velocity);
            this.EnemyList[i].setY(this.EnemyList[i].getY() - Math.sin(this.EnemyList[i].Angle) * this.Velocity);
    	}
    }
}