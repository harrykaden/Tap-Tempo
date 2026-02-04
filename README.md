# Tap Tempo

This repository is a small personal project to learn Javascript + React for the first time.

## Design

The page uses a fixed-size stack to store the eight most recent time intervals (in milliseconds) between spacebar presses. Eight beats correspond to two musical bars, and testing showed that averaging over eight intervals provides a more stable BPM calculation.

If the user pauses for more than two seconds between presses, the stack is reset. This threshold was selected because the slowest tempo a person can reasonably count is approximately 33 BPM; a two-second interval between beats corresponds to 30 BPM.

This project was developed with assistance from ChatGPT. The core design and page functionality were manually implemented, with the language model used primarily to fill gaps in JavaScript knowledge and support specific implementation details.