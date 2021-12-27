export interface MovimentoCadastrarDto {
    debito: string;
    credito: string;
    hist: string;
    obs: string;
    dt_vencto: Date;
    dt_emissao: Date;
    valor: number;
}