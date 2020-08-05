import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import FormSection from "../FormSection";
import { materialActions } from "../../redux/material";

export default function MaterialParameterSelector() {
    const { materialParams } = useSelector((state) => state.material);
    const dispatch = useDispatch();

    const input = (value, onChangeAction) => (
        <input
            value={value}
            onChange={(event) => {
                dispatch(onChangeAction(event.targetValue));
            }}
        />
    );
    const items = [
        {
            label: "Exchange stiffness",
            selection: input(
                materialParams.exchangeStiffness,
                materialActions.exchangeStiffnessChanged
            ),
            unit: "J/m"
        },
        {
            label: "Landau-Lifshitz damping",
            selection: input(
                materialParams.landauLifshitzDamping,
                materialActions.landauLifshitzDampingChanged
            ),
            unit: " "
        },
        {
            label: "Dzyaloshinskii-Moriya interaction (bulk)",
            selection: input(
                materialParams.dmiBulk,
                materialActions.dmiBulkChanged
            ),
            unit: "J/m2"
        },
        {
            label: "Dzyaloshinskii-Moriya interaction (interfacial)",
            selection: input(
                materialParams.dmiInterfacial,
                materialActions.dmiInterfacialChanged
            ),
            unit: "J/m2"
        },
        {
            label: "Uniaxial anisotropy constant (1st order)",
            selection: input(
                materialParams.uniaxialAnis1,
                materialActions.uniaxialAnis1Changed
            ),
            unit: "J/m3"
        },
        {
            label: "Uniaxial anisotropy constant (2nd order)",
            selection: input(
                materialParams.uniaxialAnis2,
                materialActions.uniaxialAnis2Changed
            ),
            unit: "J/m3"
        },
        {
            label: "Cubic anisotropy constant (1st order)",
            selection: input(
                materialParams.cubicAnis1,
                materialActions.cubicAnis1Changed
            ),
            unit: "J/m3"
        },
        {
            label: "Cubic anisotropy constant (2nd order)",
            selection: input(
                materialParams.cubicAnis2,
                materialActions.cubicAnis2Changed
            ),
            unit: "J/m3"
        },
        {
            label: "Cubic anisotropy constant (3rd order)",
            selection: input(
                materialParams.cubicAnis3,
                materialActions.cubicAnis3Changed
            ),
            unit: "J/m3"
        }
    ];

    return <FormSection title={"Material Parameters"} items={items} />;
}
