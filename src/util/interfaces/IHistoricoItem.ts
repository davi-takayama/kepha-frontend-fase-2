// interface dos itens do historico
export interface IHistoricoItem {
    id: number;
    unidade_a_converter: string;
    valor_a_converter: number;
    unidade_convertida: string;
    valor_convertido: number;
}