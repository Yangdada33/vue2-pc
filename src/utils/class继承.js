class Preson {
    constructor(name) {
        this.name = name
    }

    drink() {
        console.log('喝水');
    }
}

class Student extends Preson { //关键词  extends
    constructor(name, score) {
        super(name) // 关键词 super 
        this.score = score
    }

    introduce() {
        console.log(`我是${this.name},考了${this.score}分`);
    }
}

const student = new Student('赵四', 99)
    // console.log('student:', student);
student.introduce()

class Teacher extends Preson {
    constructor(name, subject) {
        super(name)
        this.subject = subject
    }

    teach() {
        console.log(`我是${this.name},教${this.subject}`);
    }
}
const teacher = new Teacher('张三', '前端')
    // console.log('student:', student);
teacher.teach()
teacher.drink() //方法也是可以继承的