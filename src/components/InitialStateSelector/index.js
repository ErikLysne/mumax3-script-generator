import React from "react";
import FormSection from "../FormSection";

export default function InitialStateSelector() {
    const items = [
        {
            label: "Initial state",
            selection: (
                <select>
                    <option value="Random">Random</option>
                    <option value="Uniform">Uniform</option>
                    <option value="Helical">Helical</option>
                </select>
            )
        }
    ];

    return <FormSection title={"Initial States"} items={items} />;
}
