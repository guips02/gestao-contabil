import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PlanoContabil } from "../planoContabil/plano.contabil.entity";
import { NaturezaEnum } from "./enums/natureza.enum";
import { TipoEnum } from "./enums/tipo.enum";

@Entity("tb_conta_contabil")
export class ContaContabil {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeConta: string;

    @Column()
    codigo: string;

    @Column()
    classificacao: string;

    @Column({
        type: "enum",
        enum: NaturezaEnum,
    })
    natureza: NaturezaEnum;

    @Column({
        type: "enum",
        enum: TipoEnum,
    })
    tipo: TipoEnum;

    @Column({ nullable: true })
    classificacaoReferencial?: string;

    @ManyToOne(() => PlanoContabil, (planoContabil) => planoContabil.contas)
    @JoinColumn({ name: "planoContabilId" })
    planoContabil: PlanoContabil;
}