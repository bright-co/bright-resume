import { ISkill } from "@models";
import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ _id: false })
@ObjectType()
export class Skill extends Document implements ISkill {
  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  point?: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
