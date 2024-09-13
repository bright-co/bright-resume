import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { File, Resume, User } from "../../models";
import { Connection, Model } from "mongoose";

@Injectable()
export class DbService {
  constructor(
    @InjectConnection() public readonly connection: Connection,
    @InjectModel(User.name) public userModel: Model<User>,
    @InjectModel(Resume.name) public resumeModel: Model<Resume>,
    @InjectModel(File.name) public fileModel: Model<File>
  ) {}

  getConnection(): Connection {
    return this.connection;
  }

  async transaction(fn: () => Promise<void>) {
    const session = await this.userModel.db.startSession();

    try {
      session.startTransaction();
      await fn();
      await session.commitTransaction();
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      session.endSession();
    }
  }
}
