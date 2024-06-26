import { CalculationResults } from "../interface/CalculationResults";

export const calculateCLT = (salary: number): CalculationResults => {
  const feriasDecimoTerceiro = salary / 12;
  const fgts = salary * 0.08;
  const inss = salary * 0.11;
  const irrf = salary > 1903.98 ? (salary - 1903.98) * 0.075 : 0;
  const remuneracaoBrutaEfetiva = salary + feriasDecimoTerceiro + fgts;
  const custoMensalContratado = inss + irrf;
  const remuneracaoLiquidaEfetiva = salary - inss - irrf;
  const pagamentoLiquido = remuneracaoLiquidaEfetiva;
  const recolhimentoTributos = inss + irrf;
  const custoEmpresaContratante = remuneracaoBrutaEfetiva;

  return {
    salarioBruto: salary,
    feriasDecimoTerceiro,
    fgts,
    remuneracaoBrutaEfetiva,
    inss,
    irrf,
    iss: 0,
    irpj: 0,
    csll: 0,
    pis: 0,
    cofins: 0,
    simplesNacional: 0,
    custoMensalContratado,
    remuneracaoLiquidaEfetiva,
    pagamentoLiquido,
    recolhimentoTributos,
    custoEmpresaContratante,
  };
};

export const calculatePJ = (
  salary: number,
  isSimples: boolean
): CalculationResults => {
  const iss = isSimples ? 0 : salary * 0.02;
  const irpj = isSimples ? 0 : salary * 0.15;
  const csll = isSimples ? 0 : salary * 0.09;
  const pis = isSimples ? 0 : salary * 0.0065;
  const cofins = isSimples ? 0 : salary * 0.03;
  const simplesNacional = isSimples ? salary * 0.06 : 0;
  const remuneracaoBrutaEfetiva = salary;
  const custoMensalContratado =
    iss + irpj + csll + pis + cofins + simplesNacional;
  const remuneracaoLiquidaEfetiva = salary - custoMensalContratado;
  const pagamentoLiquido = salary;
  const recolhimentoTributos = custoMensalContratado;
  const custoEmpresaContratante = remuneracaoBrutaEfetiva;

  return {
    salarioBruto: salary,
    feriasDecimoTerceiro: 0,
    fgts: 0,
    remuneracaoBrutaEfetiva,
    inss: 0,
    irrf: 0,
    iss,
    irpj,
    csll,
    pis,
    cofins,
    simplesNacional,
    custoMensalContratado,
    remuneracaoLiquidaEfetiva,
    pagamentoLiquido,
    recolhimentoTributos,
    custoEmpresaContratante,
  };
};

export const calculateAutonomo = (salary: number): CalculationResults => {
  const inss = salary * 0.2;
  const irrf = salary > 1903.98 ? (salary - 1903.98) * 0.075 : 0;
  const remuneracaoBrutaEfetiva = salary;
  const custoMensalContratado = inss + irrf;
  const remuneracaoLiquidaEfetiva = salary - inss - irrf;
  const pagamentoLiquido = remuneracaoLiquidaEfetiva;
  const recolhimentoTributos = inss + irrf;
  const custoEmpresaContratante = remuneracaoBrutaEfetiva;

  return {
    salarioBruto: salary,
    feriasDecimoTerceiro: 0,
    fgts: 0,
    remuneracaoBrutaEfetiva,
    inss,
    irrf,
    iss: 0,
    irpj: 0,
    csll: 0,
    pis: 0,
    cofins: 0,
    simplesNacional: 0,
    custoMensalContratado,
    remuneracaoLiquidaEfetiva,
    pagamentoLiquido,
    recolhimentoTributos,
    custoEmpresaContratante,
  };
};
