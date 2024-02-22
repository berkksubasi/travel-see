export type User = {
    id: string;
    name: string;
    imageUri: string;
};

export type Message = {
    id: string;
    content: string;
    createdAt: string;
};

export type ChatRoom = {
    id: string;
    users: User[];
    lastMessage: Message;
};