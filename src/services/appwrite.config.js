
import { Client ,Account ,Databases } from 'appwrite';

const client =new Client();

client.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('64763757ef54f28705b00');



export const account =new Account(client);

//Database

export const database =new Databases(client,"64763799adf93d862c8aa");
