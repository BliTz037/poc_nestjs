import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Todos")
class Todos {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({ type: 'varchar', length: 300, nullable: false })
    public name: string

    @Column({ type: 'varchar', length: 300, nullable: true })
    public description: string

    @Column({ type: 'boolean', default: false, nullable: false })
    public isDone: boolean
}

export default Todos;