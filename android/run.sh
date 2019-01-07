#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n Countdown.Mskaife/host.exp.exponent.MainActivity
