export default {
    material: "FeGe",
    materialParams: {
        exchangeStiffness: "8.78e-12",
        landauLifshitzDamping: "0.1",
        dmiBulk: "1.576e-3",
        dmiInterfacial: "0",
        uniaxialAnis1: "0",
        uniaxialAnis2: "0",
        CubicAnis1: "0",
        CubicAnis2: "0",
        CubicAnis3: "0"
    },
    geometry: {
        cellSize: {
            x: "2",
            y: "2",
            z: "2"
        },
        grid: {
            x: "512",
            y: "512",
            z: "32"
        },
        universe: {
            x: "1.024",
            y: "1.024",
            z: "0.064"
        }
    }
};
