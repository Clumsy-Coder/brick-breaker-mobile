// Use HTML 5 accelerometer
// event handler for the accelerometer.
// called when there's a change in device orientation
function handleOrientation(e)
{
    var x = e.gamma;
    paddle.x += x;
}
