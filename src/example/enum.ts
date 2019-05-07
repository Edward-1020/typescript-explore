const test = 1;
const getIndex = () => {
    return 2;
};
enum Status {
    Uploading,
    Success = test,
    Failed = getIndex(),
}

enum Message {
    Error = 'Sorry, error',
    Success = 'Hoho, success',
    Failed = Error,
}

enum Result {
    Faild = 0,
    Success = 'success',
}

// 1.enum E {A}
// 2.enum E {A = 'a'}
// 3.enum E {A = -1}

enum Animal1 {
    Dog = 1,
    Cat = 2,
}

interface IDog {
    type: Animal1.Dog;
}

const dog: IDog = {
    type: Animal1.Dog,
};

//  联合枚举类型
enum Status1 {
    Off,
    On,
}

interface ILight {
    status: Status1;
}
const light: ILight = {
    status: Status1.Off,
};

//  编译完成后，Animals1不再是一个对象，而是直接在使用处使用枚举值替
const enum Animals1 {
    Success,
}
//  Animals1.Success 直接编译为 0
