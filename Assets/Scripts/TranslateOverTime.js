#pragma strict
var speed : float;

function Start () {

}

function Update () {
// Slowly rotate the object around its X axis at 1 degree/second.
    transform.Translate(Vector3.back * Time.deltaTime * speed, Space.World);
}