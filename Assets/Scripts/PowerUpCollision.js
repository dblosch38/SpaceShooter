#pragma strict
/*
This script is responsible for managing the collision of power ups.
*/
var powerUpSound : GameObject;

  //=====================
 //	Functions
//=====================
function OnTriggerEnter(col : Collider) {
//Main Collision Trigger
	if (col.gameObject.tag == "Player") {
		//Activate power up, make sound effect and destroy power up
		col.gameObject.GetComponent(PlayerLaserFire).PowerUpLaserSpread();
		Instantiate(powerUpSound, transform.position, transform.rotation);
		Destroy(gameObject);
	}
}