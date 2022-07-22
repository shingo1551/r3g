// scenario.ts
import { Scenario } from './interface.ts';

export const scenarios = [
  {
    message: 'get member',
    method: 'GET',
    id: 'id-001',
    expected: {
      status: 200,
      member: {
        name: 'suzuki',
        age: 30
      }
    }
  },
  {
    message: 'post member',
    method: 'POST',
    id: 'id-002',
    member: {
      name: 'nakamura',
      age: 19
    },
    expected: {
      status: 200
    }
  },
  {
    message: 'put member',
    method: 'PUT',
    id: 'id-003',
    member: {
      name: 'nakamura',
      age: 19
    },
    expected: {
      status: 200
    }
  },
  {
    message: 'del member',
    method: 'DEL',
    id: 'id-002',
    expected: {
      status: 200
    }
  }
] as Scenario[];
