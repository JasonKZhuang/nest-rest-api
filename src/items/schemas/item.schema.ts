import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Item {
  @Prop({ required: true })
  name: string;

  @Prop()
  qty: number;

  @Prop()
  description: string;
}

export type ItemDocument = Item & Document;
export const ItemSchema = SchemaFactory.createForClass(Item);