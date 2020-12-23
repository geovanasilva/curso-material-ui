import React from 'react';
import { InputBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const Input = withStyles({
    input: {
        backgroundColor: "white",
        boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.06)",
        fontSize: 12,
        marginTop: 16,
        padding: "10px 12px",
    }
})(InputBase);

export default function Formulario() {
    return (
        <div>
            <h1>Informações</h1>
            <Input placeholder="Nome"/>
        </div>
    )
}
