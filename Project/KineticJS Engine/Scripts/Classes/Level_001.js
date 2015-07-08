//================================================================
//
//  Level 001
//
//================================================================
var Level_001 = new function() {
    //================================
    // Variables
    //================================
    this.IsInitialized = false;
    this.RoomSwitchArray = [];
    this.bulletList = new Array();

    //================================
    // Functions
    //================================
    // Initializing the level
    this.Initialize = function() {
        // Keep this at the top
        MainGame.GameObjectsLayer.removeChildren();

        // Place your variables here n such for starting a level
        MainGame.GameObjectsLayer.add(ObjectPlayer);
        ObjectPlayer.start();

        ObjectPlayer.setX((1280 / 2) - 32);
        ObjectPlayer.setY((768 / 2) - 32);

        //AudioManager.BackgroundMusic.play();
        AudioManager.BackgroundMusic.volume = 0.1;
        AudioManager.BackgroundMusic.loop = true;

        this.RoomSwitchArray.push(new Kinetic.Rect({ x: 1280 / 2 - 12, y: 1, width: 24, height: 64, fill: null }));
        this.RoomSwitchArray.push(new Kinetic.Rect({ x: 1280 - 65, y: 768 / 2 - 12, width: 64, height: 24, fill: null }));
        this.RoomSwitchArray.push(new Kinetic.Rect({ x: 1280 / 2 - 12, y: 768 - 65, width: 24, height: 64, fill: null }));
        this.RoomSwitchArray.push(new Kinetic.Rect({ x: 1, y: 768 / 2 - 12, width: 64, height: 24, fill: null }));
        MainGame.GameObjectsLayer.add(this.RoomSwitchArray[0]);
        MainGame.GameObjectsLayer.add(this.RoomSwitchArray[1]);
        MainGame.GameObjectsLayer.add(this.RoomSwitchArray[2]);
        MainGame.GameObjectsLayer.add(this.RoomSwitchArray[3]);
    }

    // Updating the level
    this.Update = function() {
        // Function for letting initialize run once
        if (!this.IsInitialized) {
            this.Initialize();

            RoomManager.GenerateLevel();

            this.IsInitialized = true;
        }
        else {
            // This is for Updating level.
            bullet.Update();
            speler.Update();
            vijandSpawner.Update();

            // Collision for the enemy and the bullet
            for(var i = 0; i < this.bulletList.length; i++) {
                for (var j = 0; j < vijandSpawner.EnemyList.length; j++) {
                    if (IsIntersecting(this.bulletList[i], vijandSpawner.EnemyList[j])) {
                        this.bulletList[i].remove();
                        this.bulletList.splice(i, 1);

                        vijandSpawner.EnemyList[j].Health -= speler.BulletDamage;
                    }
                }
            }

            // Checking for the enemy health
            for (var i = 0; i < vijandSpawner.EnemyList.length; i++) {
                if (vijandSpawner.EnemyList[i].Health == 0) {

                    var Random = Math.floor(Math.random() * 10);

                    if (Random == 1) {
                        PowerUpObject.CreatePowerUp({ x: vijandSpawner.EnemyList[i].getX(), y: vijandSpawner.EnemyList[i].getY() });
                    }

                    vijandSpawner.EnemyList[i].remove();
                    vijandSpawner.EnemyList.splice(i, 1);

                }
            }

            // The Power up management
            PowerUpManager.Update();

            // Collision with the player and the enemy
            for (var i = 0; i < vijandSpawner.EnemyList.length; i++) {
                if (IsIntersecting(ObjectPlayer, vijandSpawner.EnemyList[i] )) {
                    MainGame.CurrentGameState = "GameOver";
                }
            }

            RoomManager.Update();
        }
    }

    // Drawing the level
    this.Draw = function () {

        MainGame.GameObjectsLayer.draw();
        MainGame.BackgroundLayer.draw();

    }
}