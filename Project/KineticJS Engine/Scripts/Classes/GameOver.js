//================================================================
//
//  RoomManager
//
//================================================================
var GameOverObject = new function () {

    var _BasePosX = (1280 / 2) - (864 / 2);
    var _BasePosY = (768 / 2) - (384 / 2);
    var _Timer001 = 0;

    var _AddX = 0;
    var _AddY = 0;

    var _Rectangle = new Kinetic.Rect({x: 0, y: 0, width: 1280, height: 768, fill:'black'});

    this.Initialize = function() {
        MainGame.GameObjectsLayer.removeChildren();
        MainGame.GameObjectsLayer.add(_Rectangle);
        MainGame.GameObjectsLayer.add(GameOverTextObject_002);
        MainGame.GameObjectsLayer.add(GameOverTextObject_001);

        GameOverTextObject_001.setX((1280 / 2) - (864 / 2));
        GameOverTextObject_001.setY((768 / 2) - (384 / 2));

        GameOverTextObject_002.setX((1280 / 2) - (864 / 2));
        GameOverTextObject_002.setY((768 / 2) - (384 / 2));
    }

    this.Update = function () {

        _Timer001 += 0.025;

        _AddX = Math.cos(_Timer001) * 8;
        _AddY = Math.sin(_Timer001) * 8;

        GameOverTextObject_002.setX(_BasePosX + _AddX);
        GameOverTextObject_002.setY(_BasePosY + _AddY);

        if (KeyboardManager.KeyPressList[83]) {

            location.reload();

        }

    }

    this.Draw = function () {
        MainGame.GameObjectsLayer.draw();
    }
}