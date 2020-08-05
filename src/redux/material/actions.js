import * as types from "./types";

export const materialChanged = (material) => ({
    type: types.MATERIAL_CHANGED,
    payload: {
        material: material
    }
});

export const exchangeStiffnessChanged = (exchangeStiffness) => ({
    type: types.EXCHANGE_STIFFNESS_CHANGED,
    payload: {
        exchangeStiffness: exchangeStiffness
    }
});

export const landauLifshitzDampingChanged = (landauLifshitzDamping) => ({
    type: types.LANDAU_LIFSHITZ_DAMPING_CHANGED,
    payload: {
        landauLifshitzDamping: landauLifshitzDamping
    }
});

export const dmiBulkChanged = (dmiBulk) => ({
    type: types.DMI_BULK_CHANGED,
    payload: {
        dmiBulk: dmiBulk
    }
});

export const dmiInterfacialChanged = (dmiInterfacial) => ({
    type: types.DMI_INTERFACIAL_CHANGED,
    payload: {
        dmiInterfacial: dmiInterfacial
    }
});

export const uniaxialAnis1Changed = (uniaxialAnis1) => ({
    type: types.UNIAXIAL_ANIS_1_CHANGED,
    payload: {
        uniaxialAnis1: uniaxialAnis1
    }
});

export const uniaxialAnis2Changed = (uniaxialAnis2) => ({
    type: types.UNIAXIAL_ANIS_2_CHANGED,
    payload: {
        uniaxialAnis2: uniaxialAnis2
    }
});

export const cubicAnis1Changed = (cubicAnis1) => ({
    type: types.CUBIC_ANIS_1_CHANGED,
    payload: {
        cubicAnis1: cubicAnis1
    }
});

export const cubicAnis2Changed = (cubicAnis2) => ({
    type: types.CUBIC_ANIS_2_CHANGED,
    payload: {
        cubicAnis2: cubicAnis2
    }
});

export const cubicAnis3Changed = (cubicAnis3) => ({
    type: types.CUBIC_ANIS_3_CHANGED,
    payload: {
        cubicAnis3: cubicAnis3
    }
});

export const cellSizeChanged = (x, y, z) => ({
    type: types.CELL_SIZE_CHANGED,
    payload: {
        x: x,
        y: y,
        z: z
    }
});

export const gridChanged = (x, y, z) => ({
    type: types.GRID_CHANGED,
    payload: {
        x: x,
        y: y,
        z: z
    }
});

export const universeChanged = (x, y, z) => ({
    type: types.UNIVERSE_CHANGED,
    payload: {
        x: x,
        y: y,
        z: z
    }
});
