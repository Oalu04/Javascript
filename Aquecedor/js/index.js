function heat() {
    while (getTemp() < targetTemp) {
        shovelCoal();
        lightfire();
        harnessSun();

    }

}