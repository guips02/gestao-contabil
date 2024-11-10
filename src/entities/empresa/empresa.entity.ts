import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RegimeTributarioEnum } from "./enums/regime.tributario.enum";
import { PlanoContabil } from "../planoContabil/plano.contabil.entity";

@Entity("tb_empresa")
export class Empresa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    razaoSocial: string;

    @Column()
    apelido: string;

    @Column({
        type: "enum",
        enum: RegimeTributarioEnum
    })
    regimeTributario: RegimeTributarioEnum;

    @Column()
    endereco: string;

    @ManyToOne(() => PlanoContabil, (planoContabil) => planoContabil.empresas)
    @JoinColumn({ name: "planoContabilId" })
    planoContabil: PlanoContabil;
}