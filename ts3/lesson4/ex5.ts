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
