//================================================================
//
//  Collision Class - This class contains the collision
//
//================================================================
//================================
//  Variables
//================================
var _IntersectX = false;
var _IntersectY = false;

//================================
//  Functions
//================================
function IsIntersecting(Object1, Object2) {

    // This shit is a bit advanced
    if (((Object2.getX() + Object2.getWidth()) > Object1.getX()) && (Object2.getX() < (Object1.getX() + Object1.getWidth()))) {
        _IntersectX = true;
    }
    else {
        _IntersectX = false;
    }

    if (((Object2.getY() + Object2.getHeight()) > Object1.getY()) && (Object2.getY() < (Object1.getY() + Object1.getHeight()))) {
        _IntersectY = true;
    }
    else {
        _IntersectY = false;
    }

    if (_IntersectX == true && _IntersectY == true) {
        return true;

    }
    else {
        return false;
    }
}