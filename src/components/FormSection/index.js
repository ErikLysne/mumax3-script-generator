import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 30px 0;

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 0;
    }
`;

const Table = styled.table`
    width: auto;
    margin: auto;
    table-layout: fixed;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

const Title = styled.h2`
    width: 100%;
    font-size: 1rem;
    text-align: center;
`;

const Item = styled.tr``;

const Label = styled.td`
    padding-right: 10px;
`;

const Selection = styled.td`
    max-width: 150px;
    & > * {
        width: 100%;
    }

    @media only screen and (max-width: 768px) {
        width: 50px;
    }
`;

const Unit = styled.td`
    width: 50px;
    padding-left: 10px;
`;

export default function FormSection({ title, items }) {
    return (
        <Container>
            <Title>{title}</Title>
            <Table>
                {items.map((item, index) => (
                    <Item key={index}>
                        <Label>{item.label}</Label>
                        <Selection>{item.selection}</Selection>
                        <Unit>{item.unit}</Unit>
                    </Item>
                ))}
            </Table>
        </Container>
    );
}
