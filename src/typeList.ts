/* eslint-disable @typescript-eslint/no-unused-vars */
/**TypeScript Basic types */

//Boolean
let bool: boolean = true;

//number
let num: number = 0;

//string
let str: string = "Hello";

//array
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

//tuple
let tuple: [number, string] = [0, "hello"];

//any なるべく使わない
let any1: any = false;

//void 関数に紐づく. 返却値がないことを示す
// :voidは書かなくても暗黙的に設定してくれる
const funcA = (): void => {
  let test: string = "Test";
};

//null
let null1: null = null;

//undefined
let undefined1: undefined = undefined;

//object
let obj1: object = {};
let obj2: {} = {}; //あまり使わない
let obj3: { id: number; name: string } = { id: 0, name: "A" }; //あまり使わない
