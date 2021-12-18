import { IMessageData } from "../../domain/Message";
import { database } from "../../firebaseSetup";


const db = database.collection('/messages');

class MessageDataService {
    getAll(userId: string | undefined) {
        if(userId){
            return db.where('userId', "==", userId).get()
        }
        return db.get();
    }

    getOne(id: string | undefined) {
        return db.doc(id).get()
    }

    create(message: IMessageData) {
        return db.add(message)
    }

    update(id: string, value: any) {
        return db.doc(id).update(value);
    }

    delete(id: string) {
        return db.doc(id).delete();
    }
}

export const messageService = new MessageDataService();