//================================================================
//
//  Power-Up Manager
//
//================================================================
var PowerUpManager = new function () {
    //================================
    // Variables
    //================================
    this.PowerUpTime = 600;
    this.PowerUpArray = [];
    this.HasPickedUpPowerUp = false;
    this.CurrentPowerUpID = 0;
    this.CanPickUpPowerUps = true;

    //================================
    // Functions
    //================================

    //================
    // Update
    this.Update = function () {

        // Loop through an array
        for (var i = 0; i < this.PowerUpArray.length; i++) {

            // if 'SwitchRooms' is true
            if (RoomManager.SwitchRooms) {

                // Remove a 'PowerUp' Image
                this.PowerUpArray[i].remove();

                // Splice the 'PowerUp' Array
                this.PowerUpArray.splice(i, 1);
            }

            // If 'IsIntersecting' is True
            if (IsIntersecting(ObjectPlayer, this.PowerUpArray[i])) {

                // If 'CanPickUpPowerUps' is True
                if (this.CanPickUpPowerUps) {

                    // 'HasPickedUpPowerUp' is true
                    this.HasPickedUpPowerUp = true;

                    // Set 'CurentPowerUpID' to 'PowerUpArray.ID'
                    this.CurrentPowerUpID = this.PowerUpArray[i].ID;
                    
                    // Remove a 'PowerUp' image
                    this.PowerUpArray[i].remove();

                    // Splice the 'PowerUp' Array
                    this.PowerUpArray.splice(i, 1);

                    // Set 'CanPickUpPowerUps' to False
                    this.CanPickUpPowerUps = false;
                }
            }
        }

        if (this.HasPickedUpPowerUp) {
            this.PowerUpTime--;

            if (this.PowerUpTime > 0) {
                
                switch (this.CurrentPowerUpID) {

                    case 1:

                        speler.BulletDamage = 100;

                        break;

                    case 2:

                        for (var i = 0; i < vijandSpawner.EnemyList.length; i++) {

                            vijandSpawner.EnemyList[i].remove();
                            vijandSpawner.EnemyList.splice(i, 1);

                        }

                        if (vijandSpawner.EnemyList.length == 0) {

                            this.CurrentPowerUpID = 0;
                            this.PowerUpTime = 600;
                            this.HasPickedUpPowerUp = false;
                            this.CanPickUpPowerUps = true;

                        }

                        break;

                    case 3:

                        speler.MoveSpeed = 6;
                        console.log(speler.MoveSpeed);

                        break;

                }

            } else {

                speler.MoveSpeed = 3;
                speler.BulletDamage = 25;
                this.CurrentPowerUpID = 0;
                this.PowerUpTime = 600;
                this.HasPickedUpPowerUp = false;
                this.CanPickUpPowerUps = true;

            }

        }

    }

}

//================================================================
//
//  Power-Up Manager
//
//================================================================
var PowerUpObject = new function () {
    //================================
    // Functions
    //================================
    this.CreatePowerUp = function (Position) {

        var NewPowerUp = new Kinetic.Image({ x: Position.x, y: Position.y, image: ContentManager.PU_InstaKillImg });

        NewPowerUp.ID = Math.floor(Math.random() * 3) + 1;

        switch (NewPowerUp.ID) {

            case 1:

                NewPowerUp.setImage(ContentManager.PU_InstaKillImg);

                break;

            case 2:

                NewPowerUp.setImage(ContentManager.PU_Nuke);

                break;

            case 3:

                NewPowerUp.setImage(ContentManager.PU_Swiftness);

                break;
        }

        PowerUpManager.PowerUpArray.push(NewPowerUp);
        MainGame.GameObjectsLayer.add(NewPowerUp);
    }
}