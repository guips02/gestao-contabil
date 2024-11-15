import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ContaContabil } from "./ContaContabilEntity";
import { PlanoReferencialEnum } from "./enums/PlanoReferencialEnum";
import { Empresa } from "./EmpresaEntity";


@Entity("tb_plano_contabil")
export class PlanoContabil {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codPlanoContas: string;

    @Column({ length: 100 })
    nomePlanoContas: string;

    @Column()
    mascaraClassificacao: string;

    @Column({
        type: "enum",
        enum: PlanoReferencialEnum,
        nullable: true,
    })
    codPlanoContasReferencial?: PlanoReferencialEnum;

    @Column({ nullable: true })
    definicaoContaClientes?: string;

    @Column({ nullable: true })
    definicaoContaFornecedores?: string;

    @Column({ nullable: true })
    definicaoContaPatrimonioLiquido?: string;

    @Column({ nullable: true })
    definicaoContaLucroEncerramento?: string;

    @Column({ nullable: true })
    definicaoContaPrejuizoEncerramento?: string;

    @Column({ nullable: true })
    definicaoContaApuracaoResultado?: string;

    @OneToMany(() => ContaContabil, contaContabil => contaContabil.planoContabil)
    contas: ContaContabil[];

    @OneToMany(() => Empresa, (empresa) => empresa.planoContabil)
    empresas: Empresa[];
}