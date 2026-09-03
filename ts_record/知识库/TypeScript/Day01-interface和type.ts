// 定义一个用户接口
interface IUser {
    name: string;
    age: number;
}

// 定义一个方向类型
type Direction = 'left' | 'right' | 'up' | 'down';

// interface 主要描述对象结构
// type 可以描述对象、联合、函数、基础类型...

// interface 可以继承
interface Player extends IUser {
    level: number;
}

const player: Player = {
    name: 'John',
    age: 20,
    level: 10,
}

// type 也能组合
type Character = {
    name: string;
    age: number;
}
type info = Character & {
    level: number;
}

const playerInfo: info = {
    name: 'John',
    age: 20,
    level: 10,
}

// interface 可以重复声明，TS 会把它们合并。
interface User1 {
    name: string;
}

interface User1 {
    age: number;
}

