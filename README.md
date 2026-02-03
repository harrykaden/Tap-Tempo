# Tap Tempo

This repository is a small personal project to learn Javascript + React for the first time.

## Design

The page uses a fixed array stack to record the last eight ms times between spacebar presses.
Eight beats is two bars, and through testing holding eight at a time seems to stabalize the average
bpm.

If the user waits more than two seconds between presses, the stack resets. Two seconds was
chosen because the slowest tempo a human can count is around 33 bpm, and 2 seconds between beats
comes out to 30 bpm.
