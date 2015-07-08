//================================================================
//
//  Bullet Object
//
//================================================================
var bullet = new function() {
    //================================
    // Variables
    //================================
    this.X = 0;
    this.Y = 0;
    this.Speed = 8;
    
    //================================
    // Functions
    //================================
    this.CreateBullet = function(Direction, Speed, Damage) {
        var NewBullet = new Kinetic.Image({ x: ObjectPlayer.getX() + (32 - 8), y: ObjectPlayer.getY() + (48 - 8), image: ContentManager.BulletImage });

        // Variables for the bullet
        NewBullet.BulletDirection = Direction;
        NewBullet.BulletSpeed = Speed;
        NewBullet.BulletDamage = Damage;

        // Drawing the bullet
        Level_001.bulletList.push(NewBullet);
        MainGame.GameObjectsLayer.add(NewBullet);
    }
    
    this.Update = function() {       
        for (var i = 0; i < Level_001.bulletList.length; i++) {
         
            switch(Level_001.bulletList[i].BulletDirection) {
                
                case 0:
                    
                    Level_001.bulletList[i].setY(Level_001.bulletList[i].getY() - Level_001.bulletList[i].BulletSpeed);
                
                break;
                
                case 1:
                    
                    Level_001.bulletList[i].setX(Level_001.bulletList[i].getX() + Level_001.bulletList[i].BulletSpeed);
                
                break;
                    
                case 2:
                    
                    Level_001.bulletList[i].setY(Level_001.bulletList[i].getY() + Level_001.bulletList[i].BulletSpeed);
                
                break;
                    
                case 3:
                    
                    Level_001.bulletList[i].setX(Level_001.bulletList[i].getX() - Level_001.bulletList[i].BulletSpeed);
                
                break;
                
            }
            
            if (Level_001.bulletList[i].getX() > 1280) {

                Level_001.bulletList[i].remove();
                Level_001.bulletList.splice(i, 1);

            } else if (Level_001.bulletList[i].getY() > 720) {

                Level_001.bulletList[i].remove();
                Level_001.bulletList.splice(i, 1);

            } else if (Level_001.bulletList[i].getX() < 0) {

                Level_001.bulletList[i].remove();
                Level_001.bulletList.splice(i, 1);

            } else if (Level_001.bulletList[i].getY() < 0) {

                Level_001.bulletList[i].remove();
                Level_001.bulletList.splice(i, 1);

            }
            
        }
        
    }
    
    this.Draw = function() {
        
    }
    
}