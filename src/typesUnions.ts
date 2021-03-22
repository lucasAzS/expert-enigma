type PopularTag = string;
type MaybePopular = PopularTag | null;

let username: PopularTag = 'Alex';

let pageName: string | number = '1';

let errorMessage: string | null = null;

let user3: UserInterface | null = null;

let someProp: string | number | null | undefined | object = null; //never do that

const dragonsTag: MaybePopular = 'dragons'; // or null
