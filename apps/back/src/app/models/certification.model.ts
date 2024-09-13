import { ICertification } from "@models";
import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ _id: false })
@ObjectType()
export class Certification extends Document implements ICertification {
  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  name?: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowInstitute?: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  institute?: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowDate?: boolean;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, reqßuired: false })
  year?: string;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShowPoints?: boolean;

  @Field(() => Boolean, { nullable: true })
  @Prop({ type: Boolean, required: false })
  isShow?: boolean;

  @Field(() => [String], { nullable: true })
  @Prop({ type: [String], required: false })
  points?: string[];
}

export const CertificationSchema = SchemaFactory.createForClass(Certification);
