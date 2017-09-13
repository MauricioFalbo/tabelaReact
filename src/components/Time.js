import React from 'react';


export default class Tabela extends React.Component{
	render(){

		var pontos = Number(this.props.vit * 3) + Number(this.props.emp);

		return (
			<tr>
			    <td>{this.props.nome}</td>
			    <td>{this.props.vit}</td>
			    <td>{this.props.der}</td>
			    <td>{this.props.emp}</td>
			    <td>{pontos}</td>
			</tr>	
		);
	}
}