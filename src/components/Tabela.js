import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import HeadTabela from './HeadTabela';
import TimeTabela from './TimeTabela';

const times = [
		        {nome : "Fluminense", vit  : 2, der  : 0, emp  : 0},
				{nome : "Flamengo",   vit  : 0, der  : 0, emp  : 0},
				{nome : "Vasco",      vit  : 0, der  : 0, emp  : 0},
				{nome : "Botafogo",   vit  : 0, der  : 0, emp  : 0}
        	]; 

export default class Tabela extends React.Component{

    constructor(){
    	super();
    	this.state = {
    		ordenarPor:'vit'
    	}
    }

    mudaOrdenacao(novaOrdenacao){
    	this.setState({ ordenarPor: novaOrdenacao });	
    }

	render(){
		return (
			<Grid>
				<Row className="show-grid">
			      <Col xs={6} xsOffset={3}>
			      <h3>Tabela do Carioca</h3>
			      	<Table striped >
				   		<HeadTabela mudaOrdenacao={this.mudaOrdenacao.bind(this)} />
				   		<TimeTabela times={times} ordenarPor={this.state.ordenarPor} />
				  	</Table>
			      </Col>
			    </Row>
		  	</Grid>
		);
	}

}