export type Person = {
  id: string;
  name: string;
  projectId: string;
  image: string;
};

export type PeopleState = {
  people: Person[];
};

export type PeoplePayload = Omit<Person, "id">;
