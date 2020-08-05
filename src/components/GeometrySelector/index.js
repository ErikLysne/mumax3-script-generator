import React from "react";
import styled from "styled-components";
import FormSection from "../FormSection";

const Container = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 0 auto;
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 0;
    }
`;

export default function GeometrySelector() {
    const cellsizeItems = [
        {
            label: "x",
            selection: <input />,
            unit: "nm"
        },
        {
            label: "y",
            selection: <input />,
            unit: "nm"
        },
        {
            label: "z",
            selection: <input />,
            unit: "nm"
        }
    ];

    const gridItems = [
        {
            label: "x",
            selection: <input />,
            unit: "nm"
        },
        {
            label: "y",
            selection: <input />,
            unit: "nm"
        },
        {
            label: "z",
            selection: <input />,
            unit: "nm"
        }
    ];

    const universeItems = [
        {
            label: "x",
            selection: <input />,
            unit: "μm"
        },
        {
            label: "y",
            selection: <input />,
            unit: "μm"
        },
        {
            label: "z",
            selection: <input />,
            unit: "μm"
        }
    ];

    return (
        <Container>
            <FormSection title={"Cellsize"} items={cellsizeItems} />
            <FormSection title={"Grid"} items={gridItems} />
            <FormSection title={"Universe"} items={universeItems} />
        </Container>
    );
}
