import React from 'react';
import { CalculationResults } from '../../interface/CalculationResults';

interface ResultDisplayProps {
  clt: CalculationResults;
  pj: CalculationResults;
  pjSimples: CalculationResults;
  autonomo: CalculationResults;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ clt, pj, pjSimples, autonomo }) => {
  return (
    <div>
      <h2>Resultados</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>CLT</th>
            <th>Autônomo</th>
            <th>PJ Presumido</th>
            <th>PJ Simples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salário Bruto</td>
            <td>{clt.salarioBruto.toFixed(2)}</td>
            <td>{autonomo.salarioBruto.toFixed(2)}</td>
            <td>{pj.salarioBruto.toFixed(2)}</td>
            <td>{pjSimples.salarioBruto.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Férias e 13º</td>
            <td>{clt.feriasDecimoTerceiro.toFixed(2)}</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>FGTS</td>
            <td>{clt.fgts.toFixed(2)}</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Remuneração Bruta Efetiva</td>
            <td>{clt.remuneracaoBrutaEfetiva.toFixed(2)}</td>
            <td>{autonomo.remuneracaoBrutaEfetiva.toFixed(2)}</td>
            <td>{pj.remuneracaoBrutaEfetiva.toFixed(2)}</td>
            <td>{pjSimples.remuneracaoBrutaEfetiva.toFixed(2)}</td>
          </tr>
          <tr>
            <td>INSS</td>
            <td>{clt.inss.toFixed(2)}</td>
            <td>{autonomo.inss.toFixed(2)}</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>IRRF</td>
            <td>{clt.irrf.toFixed(2)}</td>
            <td>{autonomo.irrf.toFixed(2)}</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>ISS</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>{pj.iss.toFixed(2)}</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>IRPJ</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>{pj.irpj.toFixed(2)}</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>CSLL</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>{pj.csll.toFixed(2)}</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>PIS</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>{pj.pis.toFixed(2)}</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>COFINS</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>{pj.cofins.toFixed(2)}</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Simples Nacional</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>{pjSimples.simplesNacional.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Custo Mensal do Contratado</td>
            <td>{clt.custoMensalContratado.toFixed(2)}</td>
            <td>{autonomo.custoMensalContratado.toFixed(2)}</td>
            <td>{pj.custoMensalContratado.toFixed(2)}</td>
            <td>{pjSimples.custoMensalContratado.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Remuneração Mensal Líquida Efetiva</td>
            <td>{clt.remuneracaoLiquidaEfetiva.toFixed(2)}</td>
            <td>{autonomo.remuneracaoLiquidaEfetiva.toFixed(2)}</td>
            <td>{pj.remuneracaoLiquidaEfetiva.toFixed(2)}</td>
            <td>{pjSimples.remuneracaoLiquidaEfetiva.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Pagamento Líquido ao Contratado</td>
            <td>{clt.pagamentoLiquido.toFixed(2)}</td>
            <td>{autonomo.pagamentoLiquido.toFixed(2)}</td>
            <td>{pj.pagamentoLiquido.toFixed(2)}</td>
            <td>{pjSimples.pagamentoLiquido.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Recolhimento dos Tributos Retidos</td>
            <td>{clt.recolhimentoTributos.toFixed(2)}</td>
            <td>{autonomo.recolhimentoTributos.toFixed(2)}</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Recolhimento do INSS Patronal</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Custo da Empresa Contratante</td>
            <td>{clt.custoEmpresaContratante.toFixed(2)}</td>
            <td>{autonomo.custoEmpresaContratante.toFixed(2)}</td>
            <td>{pj.custoEmpresaContratante.toFixed(2)}</td>
            <td>{pjSimples.custoEmpresaContratante.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultDisplay;
