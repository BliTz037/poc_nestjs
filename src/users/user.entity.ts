import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("User")
class User {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({ unique: true, length: 294, nullable: false })
    public email: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    public firstName: string

    @Column({ type: 'varchar', length: 255, nullable: false })
    public lastName: string

    @Column({ type: 'varchar' ,nullable: false })
    public password: string
}

export default User;