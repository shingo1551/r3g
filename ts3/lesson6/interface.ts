// interface.ts
export interface Member {
    name: string;
    age: number;
}

export interface Scenario {
    message: string;
    method: 'GET' | 'POST' | 'PUT' | 'DEL';
    id: string;
    member?: Member;
    expected: Expected;
}

export interface Expected {
    status: number;
    member?: Member;
}
