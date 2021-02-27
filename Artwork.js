class Artwork {
	constructor () {
		this.container = new Container3D({x: 0, y: 0, z: 0});

		// pokeball
	    let artwork = new Plane({
	    	x: 0, 
	    	y: 0,
	    	width: 0.5, 
	    	height: 0.5,
	        asset: "2dcanvas",
	        rotationX: -90
	    });

	    this.container.addChild(artwork);
	}
}