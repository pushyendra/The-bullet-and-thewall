function hasCollided(lbullet,lwall){
    bulletLeftEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.width
    if(bulletLeftEdge>=wallLeftEdge){
      return true;
    }
       return false;
    }