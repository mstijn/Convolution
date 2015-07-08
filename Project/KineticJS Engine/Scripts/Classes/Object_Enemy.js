//================================================================
//
//  Enemy Object
//
//================================================================
var ObjectEnemy = new function () {
    //================================
    // Variables
    //================================

    //================================
    // Functions
    //================================
    this.CreateEnemy = function(Position) {
        var NewEnemy = new Kinetic.Sprite({
            x: ((1280 / 2) - 128 + (Math.random() * 256)), y: ((768 / 2) - 128 + (Math.random() * 256)), width: 64, height: 64, image: ContentManager.SlimeImage_001, animation: 'walk',
            animations: {
                walk: [
                    { x: 0, y: 0, width: 64, height: 64 },
                    { x: 64, y: 0, width: 64, height: 64 },
                    { x: 128, y: 0, width: 64, height: 64 },
                    { x: 192, y: 0, width: 64, height: 64 }
                ]
            }, frameRate: 8, frameIndex: 0
        });

        // Variables for the enemy
        NewEnemy.ID = Math.floor(Math.random() * 3) + 1;
        NewEnemy.Health = 100;
        NewEnemy.Angle = 0;

        // Switching through the enemy ID
        switch (NewEnemy.ID) {
            case 1:
                NewEnemy.setImage(ContentManager.SlimeImage_001);
                break;
            case 2:
                NewEnemy.setImage(ContentManager.SlimeImage_002);
                break;
            case 3:
                NewEnemy.setImage(ContentManager.SlimeImage_003);
                break;
        }

        // Drawing the enemy
        vijandSpawner.EnemyList.push(NewEnemy);
        MainGame.GameObjectsLayer.add(NewEnemy);

        // Starting the animation
        NewEnemy.start();
    }
}