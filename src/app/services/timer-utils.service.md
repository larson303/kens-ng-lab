# Timer Utils Service

- We need to keep track of the interval value so that if the user stops.  We maintain the value until it is cleared.

## User Actions:

### User clicks start button:
- The interval value increases the progress.

### When they click the stop button: 
- The value of the progress is maintained, but the interval is stopped.

### When they click the reset button:
- The value of the progress is reset to 0, and the interval is stopped.