import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FormSection from "../FormSection";
import { materialActions } from "../../redux/material";

export default function MaterialSelector() {
    const material = useSelector((state) => state.material);
    const dispatch = useDispatch();

    const handleValueChange = (event) => {
        dispatch(materialActions.materialChanged(event.target.value));
    };

    const items = [
        {
            label: "Material",
            selection: (
                <select value={material.material} onChange={handleValueChange}>
                    <option value="FeGe">FeGe</option>
                    <option value="Fe3Sn2">Fe3Sn2</option>
                    <option value="Custom">Custom</option>
                </select>
            )
        }
    ];

    return <FormSection title={"Materials"} items={items} />;
}
