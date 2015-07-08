//================================================================
//
//  Main Menu
//
//================================================================
var MainMenu = new function () {
    //================================
    // Variables
    //================================
    this.IsInitialized = false;

    var _BasePosX = (1280 / 2) - (1150 / 2);
    var _BasePosY = -32;
    var _Timer001 = 0;

    var _AddX = 0;
    var _AddY = 0;

    //================================
    // Functions
    //================================
    this.Initialize = function() {
        
        MainGame.GameObjectsLayer.removeChildren();
        MainGame.GameObjectsLayer.add(MainMenuObject);
        MainGame.GameObjectsLayer.add(MainMenuText2);
        MainGame.GameObjectsLayer.add(MainMenuText1);

        MainMenuText1.setX(_BasePosX);
        MainMenuText1.setY(_BasePosY);
        MainMenuText2.setX(_BasePosX);
        MainMenuText2.setY(_BasePosY);

    }

	this.Update = function() {
        if (!this.IsInitialized ) {
            this.Initialize();
            this.IsInitialized = true;
        }        

        _Timer001 += 0.025;

        _AddX = Math.cos(_Timer001) * 8;
        _AddY = Math.sin(_Timer001) * 8;

        MainMenuText2.setX(_BasePosX + _AddX);
        MainMenuText2.setY(_BasePosY + _AddY);

        if (KeyboardManager.KeyPressList[81]) {
            MainGame.CurrentGameState = "Playing";
        }
	}

        // Drawing the level
    this.Draw = function () {
        MainGame.GameObjectsLayer.draw();
    }
}