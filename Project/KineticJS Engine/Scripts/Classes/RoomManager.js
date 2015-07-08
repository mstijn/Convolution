//================================================================
//
//  RoomManager
//
//================================================================
var RoomManager = new function () {
    //================================
    // Variables
    //================================
    var IsRoomInitialized = false;
    this.RoomLayerPosition = { LayerX: 0, LayerY: 0 };
    this.RoomArray = [];

    // Variables for switching the rooms
    this.SwitchRooms = false;
    this.MoveTimer = 0;
    this.SwitchState = 0;
    this.HasSwitchedRoom = true;
    this.HasBeenGenerated = true;

    // Swiching the rooms if the player touches the borders.
    this.MoveRoom = function (Direction) {

        speler.AllowMove = false;
        this.SwitchRooms = true;
        this.HasSwitchedRoom = false;

        if (this.SwitchRooms) {

            switch (Direction) {

                // Up
                case 0:

                    switch (this.SwitchState) {
                        case 0:
                            if (RoomManager.RoomLayerPosition.LayerY < (767 * 4)) {
                                this.MoveTimer++;
                                if (this.MoveTimer < 30) {
                                    ObjectPlayer.setY(ObjectPlayer.getY() - 4);
                                } else {
                                    this.MoveTimer = 0;
                                    this.SwitchState = 1;
                                    ObjectPlayer.setY(-62);
                                }
                            } else {
                                speler.AllowMove = true;
                                this.SwitchRooms = true;
                                ObjectPlayer.setY(64);
                            }

                            break;
                        case 1:
                            if (RoomManager.RoomLayerPosition.LayerY < (769 * 4)) {
                                this.MoveTimer++;
                                if (this.MoveTimer <= 96) {
                                    RoomManager.RoomLayerPosition.LayerY += 8;
                                } else {
                                    this.MoveTimer = 0;
                                    this.SwitchState = 2;
                                    ObjectPlayer.setY(766);
                                }

                            } else {
                                this.MoveTimer = 0;
                                this.SwitchState = 0;
                                speler.AllowMove = true;
                                this.SwitchRooms = false;
                                ObjectPlayer.setY(66);
                            }
                            break;
                        case 2:
                            this.MoveTimer += 1;
                            if (this.MoveTimer < 30) {
                                ObjectPlayer.setY(ObjectPlayer.getY() - 4);
                            } else {
                                this.MoveTimer = 0;
                                this.SwitchState = 0;
                                speler.AllowMove = true;
                                this.SwitchRooms = false;
                                ObjectPlayer.setY(768 - 130);
                                this.HasSwitchedRoom = true;
                                this.HasBeenGenerated = false;
                            }
                            break;
                    }
                    break;

                    // Right
                case 1:

                    switch (this.SwitchState) {
                        case 0:
                            if (RoomManager.RoomLayerPosition.LayerX > (-1279 * 4)) {
                                this.MoveTimer++;
                                if (this.MoveTimer < 30) {
                                    ObjectPlayer.setX(ObjectPlayer.getX() + 4);
                                } else {
                                    this.MoveTimer = 0;
                                    this.SwitchState = 1;
                                    ObjectPlayer.setX(1278);
                                }
                            } else {
                                speler.AllowMove = true;
                                this.SwitchRooms = true;
                                ObjectPlayer.setX(1280 - 130);
                            }

                            break;
                        case 1:
                            if (RoomManager.RoomLayerPosition.LayerX > (-1281 * 4)) {
                                this.MoveTimer++;

                                if (this.MoveTimer <= 80) {
                                    RoomManager.RoomLayerPosition.LayerX -= 16;
                                } else {
                                    this.MoveTimer = 0;
                                    this.SwitchState = 2;
                                    ObjectPlayer.setX(-62);
                                }

                            } else {
                                this.MoveTimer = 0;
                                this.SwitchState = 0;
                                speler.AllowMove = true;
                                this.SwitchRooms = false;
                                ObjectPlayer.setX(66);
                            }
                            break;
                        case 2:
                            this.MoveTimer += 1;
                            if (this.MoveTimer < 32) {
                                ObjectPlayer.setX(ObjectPlayer.getX() + 4);
                            } else {
                                this.MoveTimer = 0;
                                this.SwitchState = 0;
                                speler.AllowMove = true;
                                this.SwitchRooms = false;
                                ObjectPlayer.setX(66);
                                this.HasSwitchedRoom = true;
                                this.HasBeenGenerated = false;
                            }
                            break;
                    }
                    break;

                    // Down
                case 2:

                    switch (this.SwitchState) {
                        case 0:
                            if (RoomManager.RoomLayerPosition.LayerY > (-767 * 4)) {
                                this.MoveTimer++;
                                if (this.MoveTimer < 30) {
                                    ObjectPlayer.setY(ObjectPlayer.getY() + 4);
                                } else {
                                    this.MoveTimer = 0;
                                    this.SwitchState = 1;
                                    ObjectPlayer.setY(766);
                                }
                            } else {
                                speler.AllowMove = true;
                                this.SwitchRooms = true;
                                ObjectPlayer.setY(768 - 130);
                            }

                            break;
                        case 1:
                            if (RoomManager.RoomLayerPosition.LayerY > (-769 * 4)) {
                                this.MoveTimer++;

                                if (this.MoveTimer <= 96) {
                                    RoomManager.RoomLayerPosition.LayerY -= 8;
                                } else {
                                    this.MoveTimer = 0;
                                    this.SwitchState = 2;
                                    ObjectPlayer.setY(-62);
                                }

                            } else {
                                this.MoveTimer = 0;
                                this.SwitchState = 0;
                                speler.AllowMove = true;
                                this.SwitchRooms = false;
                                ObjectPlayer.setY(66);
                            }
                            break;
                        case 2:
                            this.MoveTimer += 1;
                            if (this.MoveTimer < 30) {
                                ObjectPlayer.setY(ObjectPlayer.getY() + 4);
                            } else {
                                this.MoveTimer = 0;
                                this.SwitchState = 0;
                                speler.AllowMove = true;
                                this.SwitchRooms = false;
                                ObjectPlayer.setY(66);
                                this.HasSwitchedRoom = true;
                                this.HasBeenGenerated = false;
                            }
                            break;
                    }
                    break;

                    // Left
                case 3:

                    switch (this.SwitchState) {
                        case 0:
                            if (RoomManager.RoomLayerPosition.LayerX < (1279 * 4)) {
                                this.MoveTimer++;
                                if (this.MoveTimer < 30) {
                                    ObjectPlayer.setX(ObjectPlayer.getX() - 4);
                                } else {
                                    this.MoveTimer = 0;
                                    this.SwitchState = 1;
                                    ObjectPlayer.setX(-62);
                                }
                            } else {
                                speler.AllowMove = true;
                                this.SwitchRooms = true;
                                ObjectPlayer.setX(66);
                            }

                            break;
                        case 1:
                            if (RoomManager.RoomLayerPosition.LayerX < (1281 * 4)) {
                                this.MoveTimer++;
                                if (this.MoveTimer <= 80) {
                                    RoomManager.RoomLayerPosition.LayerX += 16;
                                } else {
                                    this.MoveTimer = 0;
                                    this.SwitchState = 2;
                                    ObjectPlayer.setX(1278);
                                }

                            } else {
                                this.MoveTimer = 0;
                                this.SwitchState = 0;
                                speler.AllowMove = true;
                                this.SwitchRooms = false;
                                ObjectPlayer.setX(66);
                            }
                            break;
                        case 2:
                            this.MoveTimer += 1;
                            if (this.MoveTimer < 32) {
                                ObjectPlayer.setX(ObjectPlayer.getX() - 4);
                            } else {
                                this.MoveTimer = 0;
                                this.SwitchState = 0;
                                speler.AllowMove = true;
                                this.SwitchRooms = false;
                                ObjectPlayer.setX(1280 - 130);
                                this.HasSwitchedRoom = true;
                                this.HasBeenGenerated = false;
                            }
                            break;
                    }
                    break;
            }
        }
    }

    // Generating the rooms
    this.GenerateLevel = function () {

        for (var i = -4; i <= 4; i++) {
            for (var j = -4; j <= 4; j++) {
                Object_Room.Generate({X: 1280 * i, Y: 768 * j}, i, j);
            }
        }

        this.RoomArray[40].setImage(ContentManager.StartRoomImage);
    }

    // Updating the rooms
    this.Update = function () {
        for (var i = 0; i < this.RoomArray.length; i++) {

            this.RoomArray[i].setX(this.RoomLayerPosition.LayerX - this.RoomArray[i].AddPosition.X);
            this.RoomArray[i].setY(this.RoomLayerPosition.LayerY - this.RoomArray[i].AddPosition.Y);

        }

        if (this.HasSwitchedRoom) {
            if (!this.HasBeenGenerated) {
                vijandSpawner.CreateEnemies();
                this.HasBeenGenerated = true;
            }
        }

        if (!this.HasSwitchedRoom) {
            for (var i = 0; i < vijandSpawner.EnemyList.length; i++) {
                vijandSpawner.EnemyList[i].remove();
                vijandSpawner.EnemyList.splice(i, 1);
            }
        }
    }
}