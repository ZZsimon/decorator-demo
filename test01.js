function readonly(target, name, descriptor) {
    console.log(name, 'name')
    descriptor.writable = false
    return descriptor
}


class Animal {

    @readonly
    log() {
        console.log('test readonly')
    }

}

const cat = new Animal()
cat.log()
// 不会生效
// 如果没有使用@readonly装饰这个方法，就会生效，修改这个方法
cat.log = 2 