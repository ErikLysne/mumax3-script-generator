import * as types from "./types";
import * as materials from "./materials";

const initialState = {
    material: "Custom",
    materialParams: {
        exchangeStiffness: 0,
        landauLifshitzDamping: 0,
        dmiBulk: 0,
        dmiInterfacial: 0,
        uniaxialAnis1: 0,
        uniaxialAnis2: 0,
        cubicAnis1: 0,
        cubicAnis2: 0,
        cubicAnis3: 0
    },
    geometry: {
        cellSize: {
            x: 0,
            y: 0,
            z: 0
        },
        grid: {
            x: 0,
            y: 0,
            z: 0
        },
        universe: {
            x: 0,
            y: 0,
            z: 0
        }
    }
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.MATERIAL_CHANGED:
            switch (payload.material) {
                case "FeGe": {
                    return materials.FeGe;
                }
                default: {
                    return initialState;
                }
            }
        case types.EXCHANGE_STIFFNESS_CHANGED: {
            return {
                ...state,
                materialParams: {
                    ...state.materialParams,
                    exchangeStiffness: payload.exchangeStiffness
                }
            };
        }

        default:
            return state;
    }
};
