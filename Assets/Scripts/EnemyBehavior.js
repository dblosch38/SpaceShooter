#pragma strict
/*
This script is responsible for managing all tasks the directly relate to enemy collision.
*/

var player : GameObject;
var explosion : GameObject;
var explosionSound : GameObject;

  //=====================
 //	Functions
//=====================
function OnTriggerEnter(col : Collider) {
//Will enemies ever collide with one another?
	if (col.gameObject.tag == "laser") {
		//Create explosion graphic and sound
		explosion = Instantiate(explosion, transform.position, transform.rotation);
		Instantiate(explosionSound, transform.position, transform.rotation);
		
		//Apply laser's velocity to the explosion
		explosion.particleSystem.rigidbody.velocity = transform.TransformDirection(Vector3.forward);
		
		Destroy(gameObject);
	}
}

function Kill() {
//Reserved for potential special enemy death effects
	Destroy(gameObject);
}