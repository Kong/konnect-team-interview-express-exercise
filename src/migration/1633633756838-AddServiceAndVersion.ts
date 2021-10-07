import {MigrationInterface, QueryRunner} from "typeorm";

export class AddServiceAndVersion1633633756838 implements MigrationInterface {
    name = 'AddServiceAndVersion1633633756838'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "version" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "name" character varying NOT NULL, "service_id" integer, CONSTRAINT "PK_4fb5fbb15a43da9f35493107b1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "service" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "version" ADD CONSTRAINT "FK_2c90de3a5b6734a9e0bac738483" FOREIGN KEY ("service_id") REFERENCES "service"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "version" DROP CONSTRAINT "FK_2c90de3a5b6734a9e0bac738483"`);
        await queryRunner.query(`DROP TABLE "service"`);
        await queryRunner.query(`DROP TABLE "version"`);
    }

}
