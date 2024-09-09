type StringOrNum = string | number;
type ObjWithName = { name: string; uid: StringOrNum };
// type StringOrNum = string | number;
// type ObjWithName = { name: string; uid: StringOrNum };






const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid fo ${uid}`);
};
logDetails(123, "ali");

const greet = (user: ObjWithName) => {
  console.log(`${user.name} says hello with ${user.uid} number`);
};
greet({ name: "ali", uid: 23 });

