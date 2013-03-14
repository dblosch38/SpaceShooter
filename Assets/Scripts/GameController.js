#pragma strict
static var lives : int = 3;
static var deathPos : Vector3;
var player : GameObject;

function Update () {
	
}

function Respawn() {
	yield WaitForSeconds(1);
	Instantiate(player, deathPos, player.transform.rotation);
}

function SetDeathPos(playerPosX : float, playerPosY : float, playerPosZ : float) {
	deathPos = Vector3(playerPosX, playerPosY, playerPosZ);
}