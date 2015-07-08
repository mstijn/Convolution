//================================================================
//
//  Object Room
//
//================================================================
var Object_Room = new function () {

    this.Generate = function (Position, i, j) {
        var NewRoom = new Kinetic.Image({ x: Position.X, y: Position.Y, image: ContentManager.RoomImage1 });

        NewRoom.AddPosition = { X: Position.X, Y: Position.Y };
        NewRoom.BasePosition = RoomManager.RoomLayerPosition;
        NewRoom.RoomID = Math.floor(Math.random() * 5) + 1;
        NewRoom.RoomPosition = { X: Position.X + (1280 / 2), Y: Position.Y + (768 / 2) };

        switch (NewRoom.RoomID) {
            case 1:
                NewRoom.setImage(ContentManager.DungeonRoomImage);
                break;
            case 2:
                NewRoom.setImage(ContentManager.IceRoomImage);
                break;
            case 3:
                NewRoom.setImage(ContentManager.PlayRoomImage);
                break;
            case 4:
                NewRoom.setImage(ContentManager.EyeRoomImage);
                break;
            case 5:
                NewRoom.setImage(ContentManager.DarkRoomImage);
                break;
        }

        RoomManager.RoomArray.push(NewRoom);
        MainGame.BackgroundLayer.add(NewRoom);

        console.log("[Room: " + i + " | " + j + "]: " + NewRoom.RoomID);
    }

}