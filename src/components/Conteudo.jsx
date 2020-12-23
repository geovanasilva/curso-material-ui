import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Formulario from './Formulario';

const useStyles = makeStyles({
    botaoFinalizarPagamento: {
        borderRadius: 0,
        boxShadow: "10px 10px 30px rgba(255, 203,71, 0.5)",
        color: "white",
        fontSize: 12,
        fontWeight: 700,
        height: 50,
        margin: "20px 20px 100px 0px",
        textTransform: "none",
        width: 200,
    },
});

export default function Conteudo() {
    const classes = useStyles();
    return (
        <div>
            <Formulario/>
            <Button variant="contained" color="primary" className={classes.botaoFinalizarPagamento}>Finalizar pagamento</Button>
        </div>
    )
}
