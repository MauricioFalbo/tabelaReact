import React from 'react';
import Time from './Time';



export default class Tabela extends React.Component{

    comparaTimes (timeA, timeB) {
        var criterio = this.props.ordenarPor;
        if (!timeA.hasOwnProperty(criterio) || !timeB.hasOwnProperty(criterio)) {
            return 0;
        }

        if (timeA[criterio] > timeB[criterio]) {
            return (criterio == "nome") ? 1 : -1;
        }

        if (timeA[criterio] < timeB[criterio]) {
         	return (criterio == "nome") ? -1 : 1;
        }

        return 0;
    }

    pegaTimesOrdenados () {
    	var timesOrdenar = this.props.times;
        var timesOrdenados = timesOrdenar.sort(this.comparaTimes.bind(this));

        return timesOrdenados;
    }

	render(){
		var times = this.pegaTimesOrdenados();
        var timesHTML = times.map(function (time) {
            return (
                <Time nome={time.nome}
                      vit={time.vit}
                      der={time.der}
                      emp={time.emp}
                      pontos={time.pontos} />
            );
        })

        return (
            <tbody>
                { timesHTML }
            </tbody>
        );
	}

}