// interface.ts
export interface Member {
    name: string;
    age: number;
}

export interface Request {
    method: 'GET' | 'POST' | 'DEL';
    id: string;
    member?: Member;
}

export interface Response {
    status: number;
    member?: Member;
}

export interface Result {
    req: Request;
    res?: Response;
    err?: string;
}
