//================================================================
//
//  Player
//
//================================================================
var speler = new function () {
    //================================
    // Variables
    //================================
    this.X = 0;
    this.Y = 0;
    this.MoveSpeed = 3;
    this.Direction = 0;
    this.SpawnDelay = 32;
    this.AllowMove = true;
    this.BulletDamage = 25;

    //================================
    // Update the player
    //================================
    this.Update = function() {
        //================================================================
        //   Controlls
        //================================================================
        //================================
        //voor
        //================================
        // If 'Up' is Pressed
        if (KeyboardManager.KeyPressList[38]) {

            // if 'AllowMove' is true
            if (this.AllowMove) {

                // if 'X' is greather than 64
                if (ObjectPlayer.getY() > (64)) {

                    // Decrease X by 'MoveSpeed'
                    ObjectPlayer.setY(ObjectPlayer.getY() - this.MoveSpeed);

                    // If the animation is not 'walk_top'
                    if (ObjectPlayer.getAnimation() != 'walk_top') {

                        // Set animation to 'walk_top'
                        ObjectPlayer.setAnimation('walk_top');
                    }

                    // Set 'Direction' to 0
                    this.Direction = 0;

                    // Else if 'X' is smaller than 64
                } else {

                    // Set 'X' to 64
                    ObjectPlayer.setY(64);

                    // If the animation is not 'idle_top'
                    if (ObjectPlayer.getAnimation() != 'idle_top') {

                        // Set animation to 'idle_top'
                        ObjectPlayer.setAnimation('idle_top');
                    }
                }
            }

            // Else if 'Left' is released
        } else {

            // If 'Direction' is 0
            if (this.Direction == 0) {

                // if the animation is not 'idle_top'
                if (ObjectPlayer.getAnimation() != 'idle_top') {

                    // Set animation to 'idle_top'
                    ObjectPlayer.setAnimation('idle_top');
                }
            }
        }

        //================================
        //rechts
        //================================
        // If 'Right' is pressed
        if (KeyboardManager.KeyPressList[39]) {

            // If 'AllowMove' is true
            if (this.AllowMove) {

                // If 'X' is smaller than 1280 - 128
                if (ObjectPlayer.getX() < (1280 - 128)) {

                    // Increase 'X' by 'MoveSpeed'
                    ObjectPlayer.setX(ObjectPlayer.getX() + this.MoveSpeed);

                    // If the animation is not 'walk_right'
                    if (ObjectPlayer.getAnimation() != 'walk_right') {

                        // set animation to 'walk_right'
                        ObjectPlayer.setAnimation('walk_right');
                    }

                    // Set 'Direction' to 1
                    this.Direction = 1;

                    // Else if 'X' is greather than 1280 - 128
                } else {
                    
                    // Set 'X' to 1280 - 128
                    ObjectPlayer.setX(1280 - 128);

                    // if the animation is not 'idle_right'
                    if (ObjectPlayer.getAnimation() != 'idle_right') {

                        // set animation to 'idle_right'
                        ObjectPlayer.setAnimation('idle_right');
                    }
                }
            }

            // Else if 'Right' is not Pressed
        } else {

            // if 'Direction' is 1
            if (this.Direction == 1) {

                // if the animation is not 'idle_right'
                if (ObjectPlayer.getAnimation() != 'idle_right') {

                    // set animation to 'idle_right'
                    ObjectPlayer.setAnimation('idle_right');
                }
            }
        }

        //================================
        //achter
        //================================
        // if 'Down' is pressed
        if (KeyboardManager.KeyPressList[40]) {
            
            // if 'AllowMove' is true
            if (this.AllowMove) {

                // if 'Y' is smaller than 768 - 192
                if (ObjectPlayer.getY() < (768 - 128)) {

                    // Increase 'X' by 'MoveSpeed'
                    ObjectPlayer.setY(ObjectPlayer.getY() + this.MoveSpeed);

                    // if the animation is not 'walk_bottom'
                    if (ObjectPlayer.getAnimation() != 'walk_bottom') {

                        // set animation to 'walk_bottom'
                        ObjectPlayer.setAnimation('walk_bottom');
                    }

                    // set 'Direction' to 2
                    this.Direction = 2;

                    // Else if 'Y' is greather than 768 - 192
                } else {

                    // Set 'Y' tp 768 - 192
                    ObjectPlayer.setY(768 - 128);

                    // if the animation is not 'idle_bottom'
                    if (ObjectPlayer.getAnimation() != 'idle_bottom') {

                        // Set animation to 'idle_bottom'
                        ObjectPlayer.setAnimation('idle_bottom');
                    }
                }
            }

            // Else if 'Down' is released
        } else {

            // if 'Direction' is 2
            if (this.Direction == 2) {

                // if the animation is not 'idle_bottom'
                if (ObjectPlayer.getAnimation() != 'idle_bottom') {

                    // set animation to 'idle_bottom'
                    ObjectPlayer.setAnimation('idle_bottom');
                }
            }
        }

        //================================
        //links
        //================================
        // if 'Left' is pressed
        if (KeyboardManager.KeyPressList[37]) {

            // if 'AllowMove' is true
            if (this.AllowMove) {

                // if 'Y' is greather than 64
                if (ObjectPlayer.getX() > 64) {

                    // Decrease Y by 'MoveSpeed'
                    ObjectPlayer.setX(ObjectPlayer.getX() - this.MoveSpeed);

                    // if the animation is not 'walk_left'
                    if (ObjectPlayer.getAnimation() != 'walk_left') {

                        // set animation to 'walk_left'
                        ObjectPlayer.setAnimation('walk_left');
                    }

                    // set 'Direction' to 3
                    this.Direction = 3;

                    // Else if 'Y' is smaller than 64
                } else {

                    // set 'Y' to 64
                    ObjectPlayer.setX(64);

                    // if the animation is not 'idle_left'
                    if (ObjectPlayer.getAnimation() != 'idle_left') {

                        // set animation to 'idle_left'
                        ObjectPlayer.setAnimation('idle_left');
                    }
                }
            }

            // Else if 'Left' is not pressed
        } else {

            // if 'Direction' is 3
            if (this.Direction == 3) {

                // if the animation is not 'idle_left'
                if (ObjectPlayer.getAnimation() != 'idle_left') {

                    // set animation to 'idle_left'
                    ObjectPlayer.setAnimation('idle_left');
                }
            }
        }

        //================================================================
        //   Room Switch
        //================================================================
        //================================
        //boven
        //================================
        // If the 'Player' is 'Intersecting' with 'Door 0'
        if (IsIntersecting(ObjectPlayer, Level_001.RoomSwitchArray[0])) {

            // If 'Direction' is 0
            if (this.Direction == 0) {
                
                // Are there no enemies in the room?
                if (vijandSpawner.EnemyList.length == 0) {

                    // Switch the Rooms
                    RoomManager.MoveRoom(0);

                }

                // Else if 'Direction' is 2
            } else if (this.Direction == 2) {

                // Are there no enemies in the room?
                if (vijandSpawner.EnemyList.length == 0) {

                    // Switch the Rooms
                    RoomManager.MoveRoom(2);

                }
            }
        }

        //================================
        // Rechts
        //================================
        // If the 'Player' is 'Intersecting' with 'Door 1'
        if (IsIntersecting(ObjectPlayer, Level_001.RoomSwitchArray[1])) {

            // If 'Direction' is 1
            if (this.Direction == 1) {

                // Are there no enemies in the room?
                if (vijandSpawner.EnemyList.length == 0) {

                    // Switch the Rooms
                    RoomManager.MoveRoom(1);

                }

                // Else if 'Direction' is 3
            } else if (this.Direction == 3) {

                // Are there no enemies in the room?
                if (vijandSpawner.EnemyList.length == 0) {

                    // Switch the Rooms
                    RoomManager.MoveRoom(3);

                }
            }
        }

        //================================
        // Onder
        //================================
        // If the 'Player' is 'Intersecting' with 'Door 2'
        if (IsIntersecting(ObjectPlayer, Level_001.RoomSwitchArray[2])) {

            // if 'Direction' is 0
            if (this.Direction == 0) {

                // Are there no enemies in the room?
                if (vijandSpawner.EnemyList.length == 0) {

                    // Switch the Rooms
                    RoomManager.MoveRoom(0);

                }

                // Else if 'Direction' is 2
            } else if (this.Direction == 2) {

                // Are there no enemies in the room?
                if (vijandSpawner.EnemyList.length == 0) {

                    // Switch the Rooms
                    RoomManager.MoveRoom(2);

                }
            }
        }

        //================================
        //links
        //================================
        // If the 'Player' is 'Intersecting' with 'Door 3'
        if (IsIntersecting(ObjectPlayer, Level_001.RoomSwitchArray[3])) {

            // If 'Direction' is 1
            if (this.Direction == 1) {

                // Are there no enemies in the room?
                if (vijandSpawner.EnemyList.length == 0) {

                    // Switch the Rooms
                    RoomManager.MoveRoom(1);

                }

                // Else if 'Direction' is 3
            } else if (this.Direction == 3) {

                // Are there no enemies in the room?
                if (vijandSpawner.EnemyList.length == 0) {

                    // Switch the Rooms
                    RoomManager.MoveRoom(3);

                }
            }
        }

        //================================================================
        //   Schieten
        //================================================================
        // If 'Space' is pressed
        if (KeyboardManager.KeyPressList[87]) {

            // Count up 'SpawnDelay'
            this.SpawnDelay++;

            // Check 'SpawnDelay' for 
            if (this.SpawnDelay > 16) {

                // Create a Bullet
                bullet.CreateBullet(this.Direction, 8, 25);

                // Reset 'SpawnDelay'
                this.SpawnDelay = 0;

            }
            // Else, if 'Space' is not pressed
        } else {

            // Reset 'SpawnDelay'
            this.SpawnDelay = 0;
        }
    }
}