import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RegimeTributarioEnum } from "./enums/RegimeTributarioEnum";
import { PlanoContabil } from "../planoContabil/PlanoContabilEntity";

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

    @ManyToOne(() => PlanoContabil, (planoContabil) => planoContabil.empresas, { nullable: true })
    @JoinColumn({ name: "planoContabilId" })
    planoContabil?: PlanoContabil;
}