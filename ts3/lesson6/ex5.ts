// ex5.ts
export interface Member {
  name: string;
  age: number;
}

interface MemberDB {
  [index: string]: Member;
}

const memberdb: MemberDB = {
  'id-001': { name: 'suzuki', age: 30 },
  'id-002': { name: 'tanaka', age: 40 },
};

export function get(id: string) {
  return memberdb[id];
}

export function set(id: string, member: Member) {
  memberdb[id] = member;
}

export function del(id: string) {
  delete memberdb[id];
}
