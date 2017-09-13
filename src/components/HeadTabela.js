import React from 'react';


export default class Tabela extends React.Component{


	alteraOrdenacao(event) {
        var colunaSelecionada = event.target.id;
        this.props.mudaOrdenacao(colunaSelecionada);
    }

	render(){
		return (

			<thead>
			    <tr  style={{cursor:"pointer"}}>
			        <th id="nome" onClick={this.alteraOrdenacao.bind(this)}>Time</th>
			        <th id="vit" onClick={this.alteraOrdenacao.bind(this)} >Vitórias</th>
			        <th id="emp" onClick={this.alteraOrdenacao.bind(this)} >Empates</th>
			        <th id="der" onClick={this.alteraOrdenacao.bind(this)} >Derrotas</th>
			        <th id="pontos" onClick={this.alteraOrdenacao.bind(this)}   >Pontos</th>
			    </tr>
			</thead>
		);
	}

}