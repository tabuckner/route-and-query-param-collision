import { Injectable } from '@angular/core';

export interface UserModel {
  id: string;
  name: string;
  bio: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users: Array<UserModel> = [
    {
      id: '1',
      name: 'Nicholas',
      bio: 'development physical bar mark exist smile north expect pain spoken lot naturally blank brass molecular generally concerned zoo trip wood consist once indeed welcome'
    },
    {
      id: '2',
      name: 'Derek',
      bio: 'bush aside thy sudden upon though movement window doubt particles triangle young aloud elephant smallest balloon bow invented pressure camp grow constantly earth eaten'
    },
    {
      id: '3',
      name: 'Julia',
      bio: 'straw small stove product type toy motor knowledge wild each afraid command try gate cover press shade fully women six success sides night parallel'
    }
  ];

  constructor() { }

  public getUsers(): Array<UserModel> {
    return [...this.users];
  }

  /**
   * @param id User ID
   * @returns the first User to match the provided ID.
   */
  public getUser(id: string): UserModel {
    const targetedUsers = this.users.filter(user => user.id === id);
    return targetedUsers[0];
  }
}
